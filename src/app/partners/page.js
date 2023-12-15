import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-5 max-lg:px-4">
        <div className="lg:col-span-3 lg:pl-36 max-lg:order-2">
          <h2 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 mt-5 lg:mt-8">
            Дизайнерам и архитекторам
          </h2>
          <div className="text-lg lg:text-2xl uppercase mb-5 lg:mb-10">
            Сотрудничество ради стиля
          </div>

          <p className="mb-5 lg:mb-5 lg:mb-10 max-w-4xl break-words break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-5 lg:mb-5 lg:mb-10 max-w-4xl break-words break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-5 lg:mb-5 lg:mb-10 max-w-4xl break-words break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
        <div className="lg:col-span-2">
          <Image
            src={"/partn1.png"}
            width={740}
            height={550}
            alt=""
            className="ml-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 mt-5 lg:mt-20 max-lg:px-4">
        <div className="lg:col-span-2">
          <Image
            src={"/partn2.png"}
            width={740}
            height={550}
            alt=""
            className="mr-auto"
          />
        </div>
        <div className="lg:col-span-3 lg:pl-36 lg:pr-36">
          <h2 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 mt-5 lg:mt-8">
            Дилерам
          </h2>
          <div className="text-lg lg:text-2xl uppercase mb-5 lg:mb-10">
            Сотрудничество ради бизнеса
          </div>

          <p className="mb-5 lg:mb-10 max-w-4xl break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-5 lg:mb-10 max-w-4xl break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-5 lg:mb-10 max-w-4xl break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 max-lg:px-4 mt-10 lg:mt-20">
        <div className="lg:col-span-3 lg:pl-36 max-lg:order-2">
          <h2 className="uppercase text-2xl lg:text-3xl lg:text-[50px] font-extralight mb-2 mt-5 lg:mt-8">
            ОПТОВАЯ ПОКУПКА
          </h2>
          <div className="text-lg lg:text-2xl uppercase mb-5 lg:mb-10">
            Сотрудничество ради прибыли
          </div>

          <p className="mb-5 lg:mb-10 max-w-4xl break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-5 lg:mb-10 max-w-4xl break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="lg:mb-10 max-w-4xl break-words">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
        <div className="lg:col-span-2">
          <Image
            src={"/partn3.png"}
            width={740}
            height={550}
            alt=""
            className="ml-auto"
          />
        </div>
      </div>
    </main>
  );
}
