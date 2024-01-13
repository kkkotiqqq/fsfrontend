import Link from "next/link";
import Image from "next/image";
import ThumbSlider from "@/app/components/ThumbSlider";
import { getProductWP } from "@/app/actions/getProductWP";
import ContactPopup from "@/app/components/ContactPopup";
import OrderPopup from "@/app/components/OrderPopup";
import parse from "html-react-parser";

function renderRichText(content) {
  return content.map((item, index) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-5">
            {item.children.map((child, childIndex) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </p>
        );
      case "list":
        return item.format === "unordered" ? (
          <ul key={index} className="list-disc pl-5">
            {item.children.map((listItem, listItemIndex) => (
              <li key={listItemIndex}>
                {listItem.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </li>
            ))}
          </ul>
        ) : (
          <ol key={index} className="list-disc pl-5">
            {item.children.map((listItem, listItemIndex) => (
              <li key={listItemIndex}>
                {listItem.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </li>
            ))}
          </ol>
        );
      default:
        return null;
    }
  });
}

export default async function Product({ params: { productId } }) {
  const product = await getProductWP(productId);

  return (
    <>
      <main className="flex min-h-screen flex-col relative">
        <Link
          href={"/productswp"}
          className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[48px] w-full max-w-[285px] flex max-2xl:flex-row-reverse gap-3 items-center justify-center shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] 2xl:absolute 2xl:-left-[35px] 2xl:top-[140px] hover:shadow-yellow-500 shadow-yellow-500 text-white 2xl:-rotate-90 max-2xl:mb-5 max-2xl:-mt-1 max-sm:max-w-[170px] max-sm:text-sm max-sm:h-10 max-2xl:ml-3"
        >
          <span>Назад в каталог</span>

          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            className="ml-3 rotate-0 2xl:rotate-90"
          >
            <path
              d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM15 3.5L1 3.5V4.5L15 4.5V3.5Z"
              fill="white"
            />
          </svg>
        </Link>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="max-w-[780px] mx-auto">
              <ThumbSlider images={product.acf.gallery} />
            </div>
            {product.content.rendered &&
              product.content.rendered.length > 0 && (
                <div className="text-[15px] mt-9 max-lg:hidden">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.content.rendered,
                    }}
                  />
                </div>
              )}
          </div>
          <div className="2xl:pl-40">
            {product.title.rendered && (
              <div className="text-2xl lg:text-[40px] lg:mb-3">
                {product.title.rendered}
              </div>
            )}
            {product.acf.price && (
              <div className="text-lg lg:text-2xl">
                От {product.acf.price} ₽
              </div>
            )}
            {product.content.rendered &&
              product.content.rendered.length > 0 && (
                <div className="text-[15px] mt-3 lg:hidden">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.content.rendered,
                    }}
                  />
                </div>
              )}
            <div className="mt-8 lg:text-xl grid gap-3">
              {product.acf.material && (
                <div className="flex gap-x-10 max-lg:flex-col">
                  <span className="min-w-[200px] font-medium">Материал </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: product.acf.material,
                    }}
                  />
                </div>
              )}
              {product.acf.colorRendering && (
                <div className="flex gap-x-10 max-lg:flex-col">
                  <span className="min-w-[200px] font-medium">
                    Цветопередача
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: product.acf.colorRendering,
                    }}
                  />
                </div>
              )}

              {product.acf.colorTemperature && (
                <div className="flex gap-x-10 max-lg:flex-col">
                  <span className="min-w-[200px] font-medium">
                    Температура цвета
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: product.acf.colorTemperature,
                    }}
                  />
                </div>
              )}

              {product.acf.supply && (
                <div className="flex gap-x-10 max-lg:flex-col">
                  <span className="min-w-[200px] font-medium">Питание</span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: product.acf.supply,
                    }}
                  />
                </div>
              )}
            </div>
            {product.acf.additionaloptions && (
              <div className="mt-7 lg:mt-14 pt-3 lg:pt-7 border-t border-dashed border-[#C0C0C0]">
                <div className="lg:text-xl font-medium mb-4">
                  Возможные дополнительные опции
                </div>

                <div className="lg:text-lg">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.acf.additionaloptions,
                    }}
                  />
                </div>
              </div>
            )}

            <OrderPopup product={product.title.rendered} />
            <ContactPopup />
            {product.acf.dimensions && product.acf.dimensions.length > 0 && (
              <div
                dangerouslySetInnerHTML={{
                  __html: product.acf.dimensions,
                }}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

// export async function generateStaticParams() {
//   const products = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_PATH}/products?populate[cover]=*`,
//     {
//       cache: "force-cache",
//     }
//   );

//   return products.map((product) => ({
//     productId: product.data.id,
//   }));
// }
