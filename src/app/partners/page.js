import Link from "next/link";
import Image from "next/image";

async function getPartners() {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_PATH}/partner?populate=*`,
  //   {
  //     next: { revalidate: 2 },
  //   }
  // );
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_PATH}/contact`,
  //   { cache: "no-store" }
  // );
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
  // return res.json();
}

export default async function Partners() {
  const partnerResponse = await fetch(
    `https://fsladmin.paxcore.ru/wp-json/wp/v2/pages/63`,
    {
      next: { revalidate: 60 },
    }
  );
  const responseData = await partnerResponse.json();

  // console.log(responseData);

  const {
    designers_title,
    designers_subtitle,
    designers_content,
    dealers_title,
    dealers_subtitle,
    dealers_content,
    opt_title,
    opt_subtitle,
    opt_content,
    designersimage,
    dealersimage,
    optimage,
  } = responseData.acf;

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-5 max-lg:px-4">
        <div className="lg:col-span-3 lg:pl-36 max-lg:order-2">
          <h2 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 mt-5 lg:mt-8">
            {designers_title}
          </h2>
          <div className="text-lg lg:text-2xl uppercase mb-5 lg:mb-10">
            {designers_subtitle}
          </div>

          <div
            className="flex flex-col gap-7"
            dangerouslySetInnerHTML={{
              __html: designers_content,
            }}
          />
        </div>
        <div className="lg:col-span-2">
          <Image
            src={designersimage.url}
            width={designersimage.width}
            height={designersimage.height}
            alt={designersimage.name}
            className="ml-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 mt-5 lg:mt-20 max-lg:px-4">
        <div className="lg:col-span-2">
          <Image
            src={dealersimage.url}
            width={dealersimage.width}
            height={dealersimage.height}
            alt={dealersimage.name}
            className="mr-auto"
          />
        </div>
        <div className="lg:col-span-3 lg:pl-36 lg:pr-36">
          <h2 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 mt-5 lg:mt-8">
            {dealers_title}
          </h2>
          <div className="text-lg lg:text-2xl uppercase mb-5 lg:mb-10">
            {dealers_subtitle}
          </div>

          <div
            className="flex flex-col gap-7"
            dangerouslySetInnerHTML={{
              __html: dealers_content,
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 max-lg:px-4 mt-10 lg:mt-20">
        <div className="lg:col-span-3 lg:pl-36 max-lg:order-2">
          <h2 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 mt-5 lg:mt-8">
            {opt_title}
          </h2>
          <div className="text-lg lg:text-2xl uppercase mb-5 lg:mb-10">
            {opt_subtitle}
          </div>

          <div>
            <div
              className="flex flex-col gap-7"
              dangerouslySetInnerHTML={{
                __html: opt_content,
              }}
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <Image
            src={optimage.url}
            width={optimage.width}
            height={optimage.height}
            alt={optimage.name}
            className="mr-auto"
          />
        </div>
      </div>
    </main>
  );
}
