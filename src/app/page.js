import Image from "next/image";
import Link from "next/link";
import FullSlider from "./components/FullSlider";
import StepsWork from "./components/StepsWork";
// import ProductsCatalog from "./components/ProductsCatalog";
import ProductsCatalogWP from "./components/ProductsCatalogWP";

async function getHomeInfo() {
  const res = await fetch(
    `https://fsladmin.paxcore.ru/wp-json/wp/v2/pages/59`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// async function getProductsWP() {
//   const res = await fetch(`https://fsladmin.paxcore.ru/wp-json/wp/v2/product`, {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default async function Home() {
  const homeInfoResponse = await getHomeInfo();
  // const productsWP = await getProductsWP();

  const {
    about_us,
    desc1title,
    desc1content,
    desc2title,
    desc2content,
    home_slider,
    catalog_pdf,
    home_video,
    video_title,
    video_subtitle,
  } = homeInfoResponse.acf;
  return (
    <main className="flex min-h-screen flex-col justify-between -mt-4 lg:-mt-40 overflow-hidden">
      <div className="">
        <div className="relative w-full flex flex-col items-center justify-center h-[400px] md:h-[600px] lg:h-screen overflow-hidden">
          <div className="absolute w-full h-full top-0 left-0 z-0">
            <video
              className="object-cover object-center max-w-none w-full h-full"
              src={home_video}
              autoPlay={true}
              loop={true}
              controls={false}
              muted
              playsInline
              // poster="/facvideo1.png"
            ></video>
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-40 z-10 w-full h-full"></div>

          <div className="px-3 relative z-10">
            {video_title && (
              <div className="text-white uppercase text-xl font-extralight text-center lg:text-[55px] [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)] bg-black bg-opacity-60 rounded-xl px-7 lg:leading-[50px] py-3 z-10">
                {video_title}
              </div>
            )}
            {video_subtitle && (
              <div className="text-white text-center mt-1 uppercase font-extralight text-lg lg:text-2xl [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)] bg-black bg-opacity-60 rounded-xl px-5 z-10">
                {video_subtitle}
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-200 relative">
          {/* <FullSlider slides={home_slider} /> */}

          <div className="absolute bottom-3 lg:bottom-10 left-1/2 -ml-2 z-10 ">
            <svg
              width="16"
              height="44"
              viewBox="0 0 16 44"
              fill="none"
              className="animate-bounce"
            >
              <path
                d="M7.29289 43.7071C7.68342 44.0976 8.31658 44.0976 8.7071 43.7071L15.0711 37.3431C15.4616 36.9526 15.4616 36.3195 15.0711 35.9289C14.6805 35.5384 14.0474 35.5384 13.6569 35.9289L8 41.5858L2.34314 35.9289C1.95262 35.5384 1.31946 35.5384 0.928931 35.9289C0.538406 36.3195 0.538406 36.9526 0.928931 37.3431L7.29289 43.7071ZM7 -4.37114e-08L7 43L9 43L9 4.37114e-08L7 -4.37114e-08Z"
                fill="#FDEB04"
              />
            </svg>
          </div>
        </div>

        <div>
          <pre
            style={{
              color: "blue",
              background: "#f0f0f0",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "16px",
            }}
          >
            {/* {JSON.stringify(productsWP, null, 2)} */}
          </pre>
        </div>

        <section className="mt-8 mb-8">
          <div className="grid 2xl:grid-cols-7 gap-x-5">
            <div className="col-span-1 lg:col-span-3 max-lg:px-4">
              <Image
                src={"/home1.png"}
                width={738}
                height={492}
                quality={100}
                className="max-lg:rounded-lg lg:rounded-r-lg"
                alt=""
              ></Image>
            </div>
            <div className="col-span-1 lg:col-span-4 max-2xl:px-5 lg:pr-14 py-6">
              <h2 className="uppercase text-2xl lg:text-[50px] font-extralight mb-3 lg:mb-10 mt-1 lg:mt-8">
                {desc1title}
              </h2>

              <div
                className="flex flex-col gap-7 lg:text-xl lg:leading-10"
                dangerouslySetInnerHTML={{
                  __html: desc1content,
                }}
              />
            </div>
          </div>

          <div className="grid 2xl:grid-cols-7 lg:mt-6 max-lg:px-4 gap-x-5">
            <div className="col-span-6 2xl:col-span-3 max-lg:mt-3 max-2xl:order-2 lg:pl-4 2xl:pl-40">
              <h2 className="uppercase text-2xl lg:text-[50px] font-extralight mb-3 lg:mb-10 mt-2 lg:mt-8">
                {desc2title}
              </h2>
              <div
                className="flex flex-col gap-7 lg:text-xl lg:leading-10"
                dangerouslySetInnerHTML={{
                  __html: desc2content,
                }}
              />
            </div>
            <div className="col-span-6 2xl:col-span-4">
              <Image
                src={"/home2.png"}
                width={1165}
                height={492}
                className="max-2xl:rounded-lg 2xl:rounded-l-lg ml-auto block"
                alt=""
              ></Image>
            </div>
          </div>
        </section>

        <ProductsCatalogWP numberOfPosts={8} />

        <div className="container mx-auto mb-16">
          <Link
            href="/productswp"
            className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[48px] w-full max-w-[760px] flex items-center justify-center shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 shadow-yellow-500 text-white mx-auto mt-6 uppercase text-xl"
          >
            <span>Смотреть все изделия</span>
          </Link>
        </div>
      </div>

      <StepsWork />

      <section className="pt-8 lg:pt-16 lg:pb-16">
        <div className="container grid grid-cols-1 lg:grid-cols-8 gap-5 items-start">
          <div className="lg:col-span-5 lg:pr-32">
            <h3 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 lg:mb-10 lg:mt-8">
              О нас
            </h3>

            <div
              className="flex flex-col gap-7 lg:text-xl lg:leading-10"
              dangerouslySetInnerHTML={{
                __html: about_us,
              }}
            />
          </div>

          <div className="bg-[#323232] col-span-1 lg:col-span-3 text-white p-4 lg:p-8">
            <div className="font-extralight text-3xl lg:leading-[65px] lg:text-[50px] [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] uppercase">
              Партнёрам <br /> дизайнерам <br />
              дилерам
            </div>
            <div className="uppercase font-extralight mt-5 text-xl lg:text-[25px]">
              Сотрудничайте с нами
            </div>
            <Link
              href="/partners"
              className="text-[#FDEB04] uppercase text-xl tracking-[8px] hover:tracking-wider transition-all font-extralight mt-8 lg:mt-16 block"
            >
              <svg
                className="max-w-full mb-4"
                width="532"
                height="8"
                viewBox="0 0 532 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M531.354 4.35351C531.549 4.15824 531.549 3.84166 531.354 3.6464L528.172 0.46442C527.976 0.269158 527.66 0.269158 527.464 0.46442C527.269 0.659682 527.269 0.976265 527.464 1.17153L530.293 3.99995L527.464 6.82838C527.269 7.02364 527.269 7.34023 527.464 7.53549C527.66 7.73075 527.976 7.73075 528.172 7.53549L531.354 4.35351ZM4.37114e-08 4.5L531 4.49995L531 3.49995L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                  fill="#FDEB04"
                />
              </svg>

              <span>Подробнее</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
