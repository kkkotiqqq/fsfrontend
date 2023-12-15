import Image from "next/image";
import Link from "next/link";
import FullSlider from "./components/FullSlider";
import StepsWork from "./components/StepsWork";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between -mt-4 lg:-mt-40">
      <div className="">
        <div className="bg-gray-200 relative">
          <FullSlider />

          <div className="absolute bottom-10 left-1/2 -ml-2 z-10 max-md:hidden">
            <svg width="16" height="44" viewBox="0 0 16 44" fill="none">
              <path
                d="M7.29289 43.7071C7.68342 44.0976 8.31658 44.0976 8.7071 43.7071L15.0711 37.3431C15.4616 36.9526 15.4616 36.3195 15.0711 35.9289C14.6805 35.5384 14.0474 35.5384 13.6569 35.9289L8 41.5858L2.34314 35.9289C1.95262 35.5384 1.31946 35.5384 0.928931 35.9289C0.538406 36.3195 0.538406 36.9526 0.928931 37.3431L7.29289 43.7071ZM7 -4.37114e-08L7 43L9 43L9 4.37114e-08L7 -4.37114e-08Z"
                fill="#FDEB04"
              />
            </svg>
          </div>
        </div>

        <section className="mt-8 mb-8">
          <div className="grid xl:grid-cols-7">
            <div className="col-span-1 xl:col-span-3 max-lg:px-4">
              <Image
                src={"/home1.png"}
                width={740}
                height={492}
                className="max-lg:rounded-lg lg:rounded-r-lg"
                alt=""
              ></Image>
            </div>
            <div className="col-span-1 lg:col-span-4 max-xl:px-5 lg:pr-14 py-6">
              <h2 className="uppercase text-2xl lg:text-[50px] font-extralight mb-3 lg:mb-10 mt-1 lg:mt-8">
                Дизайнерский свет
              </h2>
              <p className="font-light lg:text-xl mb-5 lg:leading-10">
                Наши светильники находят применение в различных областях,
                включая гостиницы, <br /> общественные места разного масштаба,
                торговые центры, аэропорты, театры, офисные здания, <br /> бары,
                рестораны и даже частные дома.
              </p>
              <p className="font-light lg:text-xl mb-5 lg:leading-10">
                Каждое изделие, будь то стандартное или созданное на заказ,
                разрабатывается, тестируется и <br /> собирается вручную, с
                особым вниманием к деталям.
              </p>
            </div>
          </div>

          <div className="grid xl:grid-cols-7 lg:mt-6 max-lg:px-4 gap-5">
            <div className="col-span-6 2xl:col-span-3 max-lg:mt-3 max-lg:order-2 lg:pl-40">
              <h2 className="uppercase text-2xl lg:text-[50px] font-extralight mb-3 lg:mb-10 mt-2 lg:mt-8">
                Стиль интерьера
              </h2>
              <p className="font-light lg:text-xl mb-5 lg:leading-10">
                Наша миссия заключается в сочетании современных технологий
                освещения с дизайном.
              </p>
              <p className="font-light lg:text-xl mb-5 lg:leading-10">
                Мы разрабатываем индивидуальные решения в соответствии с
                потребностями и идеями клиентов.
              </p>
            </div>
            <div className="col-span-6 2xl:col-span-4">
              <Image
                src={"/home2.png"}
                width={1165}
                height={492}
                className="max-lg:rounded-lg lg:rounded-l-lg ml-auto block"
                alt=""
              ></Image>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container gap-5 ">
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] xl:min-h-[385px] bg-[#323232] lg:col-span-2 lg:row-span-2 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 relative">
              <span>FSL-FLEX LINE / Quattro 1</span>
              <svg
                width="41"
                height="16"
                viewBox="0 0 41 16"
                fill="none"
                className="absolute right-4 block top-1/2 -mt-2"
              >
                <path
                  d="M40.7071 8.7071C41.0976 8.31658 41.0976 7.68341 40.7071 7.29289L34.3431 0.928929C33.9526 0.538405 33.3195 0.538405 32.9289 0.928929C32.5384 1.31945 32.5384 1.95262 32.9289 2.34314L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.7071ZM8.74228e-08 9L40 9L40 7L-8.74228e-08 7L8.74228e-08 9Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] xl:min-h-[385px] bg-[#323232] flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod6.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 2
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] xl:min-h-[385px] bg-[#323232] flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod6.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 3
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] xl:min-h-[385px] bg-[#323232] flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod7.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 4
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] xl:min-h-[385px] bg-[#323232] flex flex-col bg-center bg-cover hover:scale-[1.02] transition-transform"
          >
            <div className="text-white p-5">
              <div className="font-extralight text-3xl lg:leading-[65px] lg:text-[50px] [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] uppercase">
                Скачать <br /> Каталог
              </div>
              <div className="uppercase font-extralight mt-5 text-xl lg:text-[25px] flex items-center gap-4">
                <Image src={"/icons/pdf-icon.svg"} width={34} height={42} />
                <span>PDF</span>
              </div>
            </div>
            <div className="bg-[#323232] uppercase bg-opacity-70 mt-auto text-white text-center text-xl py-2 flex items-center justify-center relative px-16">
              Скачать
              <svg
                width="41"
                height="16"
                viewBox="0 0 41 16"
                fill="none"
                className="absolute right-4  top-1/2 -mt-2 block"
              >
                <path
                  d="M40.7071 8.7071C41.0976 8.31658 41.0976 7.68341 40.7071 7.29289L34.3431 0.928929C33.9526 0.538405 33.3195 0.538405 32.9289 0.928929C32.5384 1.31945 32.5384 1.95262 32.9289 2.34314L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.7071ZM8.74228e-08 9L40 9L40 7L-8.74228e-08 7L8.74228e-08 9Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] xl:min-h-[385px] bg-[#323232] flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 6
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] lg:min-h-[385px] lg:col-span-2 lg:row-span-2 bg-[#323232] flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 7
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] lg:min-h-[385px] bg-[#323232] flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 8
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] lg:min-h-[385px] bg-[#323232] flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 9
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[230px] lg:min-h-[385px] bg-[#323232] flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 10
            </div>
          </Link>
        </section>

        <div className="container mx-auto mb-16">
          <Link
            href="tel:000000000"
            className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[48px] w-full max-w-[760px] flex items-center justify-center shadow-lg shadow-yellow-500 text-white mx-auto mt-6 uppercase text-xl"
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

            <p className="font-light lg:text-xl lg:leading-10 mb-5">
              Благодаря знанию материалов и технологий, в сочетании с нашей
              дизайнерским подходом, мы создаём коллекции с высоким уровнем
              персонализации с 2018 года.
            </p>
            <p className="font-light lg:text-xl lg:leading-10 mb-5 ">
              Каждый наш светильник проходит через тщательный творческий и
              технологический процесс, где мастерски используются стекло, металл
              и дерево, чтобы обеспечить уникальность, качество и безупречную
              производительность.
            </p>
            <p className="font-light lg:text-xl lg:leading-10">
              Наши изделия созданы, чтобы придавать интерьерам характер.
            </p>
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
              href={"/"}
              className="text-[#FDEB04] uppercase text-xl tracking-[8px] font-extralight mt-8 lg:mt-16 block"
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
