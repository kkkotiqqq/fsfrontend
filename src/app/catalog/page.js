import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="container">
        <section className="grid grid-cols-4 container gap-5 ">
          <Link
            href="/product"
            className="w-full h-full min-h-[385px] bg-slate-300 col-span-2 row-span-2 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 1
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[385px] bg-slate-300 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod6.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 2
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[385px] bg-slate-300 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod6.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 3
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[385px] bg-slate-300 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod7.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 4
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[385px] bg-slate-300 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod8.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 flex items-center">
              Скачать
              <svg
                width="41"
                height="16"
                viewBox="0 0 41 16"
                fill="none"
                className="justify-self-end block"
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
            className="w-full h-full min-h-[385px] bg-slate-300 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 6
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[385px] col-span-2 row-span-2 bg-slate-300 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 7
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[385px] bg-slate-300 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 8
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[385px] bg-slate-300 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 9
            </div>
          </Link>
          <Link
            href="/product"
            className="w-full h-full min-h-[385px] bg-slate-300 flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: `url('/prod1.png')` }}
          >
            <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 ">
              FSL-FLEX LINE / Quattro 10
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
