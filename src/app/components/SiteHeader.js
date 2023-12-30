"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader({ phone, phoneCode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const HomeClass = isHomePage
    ? "bg-[#323232] lg:bg-black lg:bg-opacity-60 lg:backdrop-blur-lg"
    : "bg-[#323232]";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={`w-full fixed h-16 xl:h-[120px] z-50 ${HomeClass} `}>
        <div className="container mx-auto flex items-center h-full">
          <div>
            <Link
              href="/"
              className="max-xl:max-w-[150px] block"
              onClick={isMenuOpen && toggleMenu}
            >
              <Image src={"/logo.svg"} width={320} height={71} alt=""></Image>
            </Link>
          </div>

          <ul className="flex xl:gap-7 2xl:gap-14 xl:ml-20 2xl:ml-40 text-lg uppercase tracking-wide text-white max-xl:hidden">
            <li>
              <Link href="/">О студии</Link>
            </li>
            <li>
              <Link href="/products">Каталог</Link>
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
            className="ml-auto bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[48px] w-full max-w-[285px] flex items-center justify-center shadow-lg shadow-yellow-500 text-white max-xl:hidden"
          >
            <span>{phone}</span>
          </Link>

          <button
            onClick={toggleMenu}
            className="xl:hidden shrink-0 text-white ml-auto"
            aria-label="Меню"
          >
            <span
              className={
                isMenuOpen ? "hamburger-line transform top" : "hamburger-line"
              }
            ></span>
            <span
              className={
                isMenuOpen
                  ? "hamburger-line transform middle"
                  : "hamburger-line"
              }
            ></span>
            <span
              className={
                isMenuOpen
                  ? "hamburger-line transform bottom"
                  : "hamburger-line"
              }
            ></span>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed z-20 top-[64px] left-0 w-full h-52 text-white p-3 xl:!hidden ">
          <div className="bg-black border border-white/20 bg-opacity-75 backdrop-blur-lg rounded-2xl shadow-yellow-400 shadow-2xl">
            <ul className="flex flex-col items-center justify-center gap-4 py-4 uppercase tracking-widest font-bold">
              <li className="">
                <Link href="/about" onClick={toggleMenu}>
                  О студии
                </Link>
              </li>
              <li className="">
                <Link href="/products" onClick={toggleMenu}>
                  Каталог
                </Link>
              </li>
              <li className="">
                <Link href="/partners" onClick={toggleMenu}>
                  Партнёрам
                </Link>
              </li>
              <li className="">
                <Link href="/contacts" onClick={toggleMenu}>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
