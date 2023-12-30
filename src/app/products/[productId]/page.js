import Link from "next/link";
import Image from "next/image";
import ThumbSlider from "@/app/components/ThumbSlider";
import { getProduct } from "@/app/actions/getProduct";

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
  const product = await getProduct(productId);

  return (
    <>
      <main className="flex min-h-screen flex-col justify-between">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <div className="max-w-[780px] mx-auto">
              <ThumbSlider images={product.data.attributes.gallery} />
            </div>

            {product.data.attributes.description &&
              product.data.attributes.description.length > 0 && (
                <div className="text-[15px] mt-9 max-lg:hidden">
                  {product.data.attributes.description.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className="mb-5 lg:mb-10 max-w-4xl break-words"
                      >
                        {paragraph.children.map((child, childIndex) => (
                          <span key={childIndex}>{child.text}</span>
                        ))}
                      </p>
                    )
                  )}
                </div>
              )}
          </div>
          <div className="2xl:pl-40">
            {product.data.attributes.title && (
              <div className="text-2xl lg:text-[40px] lg:mb-3">
                {product.data.attributes.title}
              </div>
            )}
            {product.data.attributes.price && (
              <div className="text-lg lg:text-2xl">
                От {product.data.attributes.price} ₽
              </div>
            )}
            {product.data.attributes.description &&
              product.data.attributes.description.length > 0 && (
                <div className="text-[15px] mt-3 lg:hidden">
                  {product.data.attributes.description.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className="mb-5 lg:mb-10 max-w-4xl break-words"
                      >
                        {paragraph.children.map((child, childIndex) => (
                          <span key={childIndex}>{child.text}</span>
                        ))}
                      </p>
                    )
                  )}
                </div>
              )}

            <div className="mt-8 lg:text-xl grid gap-3">
              {product.data.attributes.material && (
                <div className="flex gap-x-10 max-lg:flex-col">
                  <span className="min-w-[200px] font-medium">Материал </span>
                  <span>{product.data.attributes.material}</span>
                </div>
              )}
              {product.data.attributes.colorRendering && (
                <div className="flex gap-x-10 max-lg:flex-col">
                  <span className="min-w-[200px] font-medium">
                    Цветопередача
                  </span>

                  <span>{product.data.attributes.colorRendering}</span>
                </div>
              )}
              {product.data.attributes.colorTemperature && (
                <div className="flex gap-x-10 max-lg:flex-col">
                  <span className="min-w-[200px] font-medium">
                    Температура цвета
                  </span>
                  <span>{product.data.attributes.colorTemperature}</span>
                </div>
              )}
              {product.data.attributes.supply && (
                <div className="flex gap-x-10 max-lg:flex-col">
                  <span className="min-w-[200px] font-medium">Питание </span>
                  <span>{product.data.attributes.supply}</span>
                </div>
              )}
            </div>
            <div className="mt-7 lg:mt-14 pt-3 lg:pt-7 border-t border-dashed border-[#C0C0C0]">
              <div className="lg:text-xl font-medium mb-4">
                Возможные дополнительные опции
              </div>

              <div className="lg:text-lg">
                {renderRichText(product.data.attributes.additionalOptions)}
              </div>
            </div>
            <Link
              href="#"
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-4 lg:mb-7 flex items-center justify-center shadow-lg shadow-black/30 text-white mx-auto font-normal gap-1 uppercase mt-7 lg:mt-14"
            >
              <span>Заказать</span>
            </Link>
            <Link
              href="#"
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[50px] w-full mb-4 lg:mb-10 flex items-center justify-center shadow-lg shadow-black/30 text-white mx-auto font-normal gap-1 uppercase text-center max-lg:text-sm"
            >
              <span>
                Есть вопросы? <br className="lg:hidden" /> Отправьте сообщение в
                1 клик
              </span>
            </Link>

            {product.data.attributes.dimensions &&
              product.data.attributes.dimensions.length > 0 && (
                <div className="">
                  {product.data.attributes.dimensions.map(
                    (paragraph, index) => (
                      <p key={index} className="max-w-4xl">
                        {paragraph.children.map((child, childIndex) => (
                          <span
                            key={childIndex}
                            className={`${child.bold ? "font-medium" : ""} ${
                              child.italic ? "italic" : ""
                            } `}
                          >
                            {child.text}
                          </span>
                        ))}
                      </p>
                    )
                  )}
                </div>
              )}
          </div>
        </div>
      </main>
    </>
  );
}
