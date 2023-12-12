"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const HomeClass = isHomePage
    ? "bg-black bg-opacity-60 backdrop-blur-lg"
    : "bg-[#323232]";

  return (
    <>
      <header className={`w-full fixed h-[120px] z-50 ${HomeClass} `}>
        <div className="container mx-auto flex items-center h-full">
          <div>
            <Link href="/">
              <Image src={"/logo.svg"} width={320} height={71} alt=""></Image>
            </Link>
          </div>

          <ul className="flex gap-14 ml-20 text-lg uppercase text-white">
            <li>
              <Link href="/about">О студии</Link>
            </li>
            <li>
              <Link href="/catalog">Каталог</Link>
            </li>
            <li>
              <Link href="/partners">Партнёрам</Link>
            </li>
            <li>
              <Link href="/contacts">Контакты</Link>
            </li>
          </ul>
          <Link
            href="tel:000000000"
            className="ml-auto bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[48px] w-full max-w-[285px] flex items-center justify-center shadow-lg shadow-yellow-500 text-white"
          >
            <span>+7 (000) 000-00-00</span>
          </Link>
        </div>
      </header>
    </>
  );
}
