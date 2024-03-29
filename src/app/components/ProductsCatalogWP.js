import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getProducts } from "../actions/getProducts";

async function getPdf() {
  const url = `https://fsladmin.paxcore.ru/wp-json/wp/v2/pages/59`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  // Проверка на наличие поля catalog_pdf в ответе

  return data.acf.catalog_pdf; // Возвращаем только ссылку на PDF файл
}

export default async function ProductsCatalogWP({ numberOfPosts, categoryId }) {
  const products = await getProducts(numberOfPosts, categoryId);

  const pdflink = await getPdf();

  return (
    <>
      <section className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container gap-5">
          {products &&
            products.flatMap((product, index) => (
              <React.Fragment key={index}>
                <Link
                  href={`/productswp/${product.id}`}
                  className={`w-full h-full min-h-[230px] relative xl:min-h-[385px] bg-[#323232] ${
                    index === 0 || index === 5
                      ? "lg:col-span-2 lg:row-span-2"
                      : ""
                  }  flex flex-col justify-end bg-center bg-cover hover:scale-[1.02] transition-transform`}
                >
                  <div className="absolute w-full h-full top-0 left-0 z-0">
                    {product &&
                      product._embedded &&
                      product._embedded["wp:featuredmedia"] &&
                      product._embedded["wp:featuredmedia"][0] &&
                      product._embedded["wp:featuredmedia"][0].source_url && (
                        <Image
                          src={
                            product._embedded["wp:featuredmedia"][0].source_url
                          }
                          fill
                          className="object-cover object-center"
                        />
                      )}
                  </div>
                  <div className="bg-black bg-opacity-70 text-white text-center text-xl py-2 relative">
                    <span>{product.title.rendered}</span>
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
                {index === 3 && (
                  <Link
                    href={pdflink ? pdflink : "#"}
                    target="_blank"
                    className="w-full h-full min-h-[230px] xl:min-h-[385px] bg-[#323232] flex flex-col bg-center bg-cover hover:scale-[1.02] transition-transform"
                    key={`pdf-item`}
                  >
                    <div className="text-white p-5">
                      <div className="font-extralight text-3xl lg:leading-[65px] lg:text-[50px] [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] uppercase">
                        Скачать <br /> Каталог
                      </div>
                      <div className="uppercase font-extralight mt-5 text-xl lg:text-[25px] flex items-center gap-4">
                        <Image
                          src={"/icons/pdf-icon.svg"}
                          width={34}
                          height={42}
                        />
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
                )}
              </React.Fragment>
            ))}

          <Link
            href="/contacts"
            className="w-full h-full min-h-[230px] xl:min-h-[385px] bg-[#323232] flex flex-col bg-center bg-cover hover:scale-[1.02] transition-transform"
          >
            <div className="text-white p-5">
              <div className="font-extralight text-3xl lg:leading-[65px] lg:text-[50px] [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] uppercase">
                Нет того, что ищете?
              </div>
              <div className="uppercase font-extralight mt-5 text-xl lg:text-[25px] flex items-center gap-4">
                <span>
                  оформите <br /> ИНДИВИДУАЛЬНЫЙ <br /> ЗАКАЗ
                </span>
              </div>
            </div>
            <div className="bg-[#323232] uppercase bg-opacity-70 mt-auto text-white text-center text-xl py-2 flex items-center justify-center relative px-16">
              Оформить
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
        </div>
        <div className="catalogabs absolute h-full p-8 tracking-[8px] [writing-mode:vertical-lr] text-[55px] right-0 top-0 leading-[67px] uppercase opacity-50 text-[#9C9C9C] font-thin [text-shadow:_0_1px_10px_rgb(255_255_255_/_80%)] origin-top-right max-2xl:hidden">
          Искусство света, созданное для вас
        </div>
      </section>
    </>
  );
}
