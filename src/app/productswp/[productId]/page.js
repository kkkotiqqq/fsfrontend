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
      <main className="flex min-h-screen flex-col justify-between">
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
