import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="grid grid-cols-5">
        <div className="col-span-3 pl-36">
          <h2 className="uppercase text-3xl lg:text-[50px] font-extralight mb-4 mt-8">
            Дизайнерам и архитекторам
          </h2>
          <div className="text-2xl uppercase mb-10">
            Сотрудничество ради стиля
          </div>

          <p className="mb-10 max-w-4xl">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-10 max-w-4xl">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-10 max-w-4xl">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
        <div className="col-span-2">
          <Image
            src={"/partn1.png"}
            width={740}
            height={550}
            alt=""
            className="ml-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 mt-20">
        <div className="col-span-2">
          <Image
            src={"/partn2.png"}
            width={740}
            height={550}
            alt=""
            className="mr-auto"
          />
        </div>
        <div className="col-span-3 pl-36 pr-36">
          <h2 className="uppercase text-3xl lg:text-[50px] font-extralight mb-4 mt-8">
            Дилерам
          </h2>
          <div className="text-2xl uppercase mb-10">
            Сотрудничество ради бизнеса
          </div>

          <p className="mb-10 max-w-4xl">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-10 max-w-4xl">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-10 max-w-4xl">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-20">
        <div className="col-span-3 pl-36">
          <h2 className="uppercase text-3xl lg:text-[50px] font-extralight mb-4 mt-8">
            ОПТОВАЯ ПОКУПКА
          </h2>
          <div className="text-2xl uppercase mb-10">
            Сотрудничество ради прибыли
          </div>

          <p className="mb-10 max-w-4xl">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-10 max-w-4xl">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
          <p className="mb-10 max-w-4xl">
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>
        <div className="col-span-2">
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
