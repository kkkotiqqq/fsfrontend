"use client";
import { React, useState } from "react";

import Link from "next/link";

export default function CatalogFilters() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <>
      <div className="container grid xl:grid-cols-2 gap-5 mb-6 lg:mb-10">
        <button
          onClick={() => {
            setShowFirst(true);
            setShowSecond(false);

            if (showFirst) {
              setShowFirst(false);
            }
          }}
          className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-lg shadow-yellow-500 transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 text-white mx-auto font-normal gap-3"
        >
          <span>Дизайнерское освещение</span>
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            className={`transition-all ${showFirst ? "rotate-180" : ""}`}
          >
            <path
              d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setShowFirst(false);
            setShowSecond(true);
            if (showSecond) {
              setShowSecond(false);
            }
          }}
          className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full flex items-center justify-center shadow-lg shadow-yellow-500 transition-all hover:shadow-xl hover:scale-[1.02] hover:shadow-yellow-500 text-white mx-auto font-normal gap-3"
        >
          <span>Промышленное освещение</span>
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            className={`transition-all ${showSecond ? "rotate-180" : ""}`}
          >
            <path
              d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {showFirst && (
        <div className="container category-designers grid grid-cols-2 lg:grid-cols-3 gap-5 mb-6 lg:mb-10">
          <Link
            href={"/category/3"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg"
          >
            Все дизайнерское освещение
          </Link>
          <Link
            href={"/category/9"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg"
          >
            Авторские
          </Link>
          <Link
            href={"/category/5"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg"
          >
            Объемные
          </Link>
          <Link
            href={"/category/8"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg"
          >
            Премиум
          </Link>
          <Link
            href={"/category/7"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg"
          >
            Профильные
          </Link>
          <Link
            href={"/category/6"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg"
          >
            Фигурные
          </Link>
        </div>
      )}

      {showSecond && (
        <div className="container category-proms grid grid-cols-2 lg:grid-cols-4 gap-5 mb-6 lg:mb-10">
          <Link
            href={"/category/4"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg "
          >
            Все промышленное освещение
          </Link>
          <Link
            href={"/category/12"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg "
          >
            Общепромышленные
          </Link>
          <Link
            href={"/category/11"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg "
          >
            Пожаробезопасные светильники
          </Link>
          <Link
            href={"/category/10"}
            className="text-center flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-all font-semibold max-lg:text-sm text-gray-600 h-11 rounded-lg "
          >
            Прожекторы
          </Link>
        </div>
      )}
    </>
  );
}
