import ProductsCatalogWP from "@/app/components/ProductsCatalogWP";
import Link from "next/link";

export async function getCategoryName(categoryId) {
  const url = `https://fsladmin.paxcore.ru/wp-json/wp/v2/productcat/${categoryId}`;

  const response = await fetch(url, {
    next: { revalidate: 3000 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch category data");
  }

  const categoryData = await response.json();

  // Возвращаем только название категории
  return categoryData.name;
}

export default async function Category({ params: { id } }) {
  const categoryName = await getCategoryName(id);
  //   const product = productArray[0];

  return (
    <>
      <main className="flex min-h-screen flex-col justify-between category-page">
        <div className="container">
          <div className="mb-10 flex items-center justify-center relative gap-5 max-lg:flex-col-reverse">
            <Link
              href={"/productswp"}
              className="bg-[#202526] border border-[#FFFBC6] rounded-[10px] h-[48px] w-full max-w-[285px] flex items-center justify-center shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] xl:absolute left-0 hover:shadow-yellow-500 shadow-yellow-500 text-white max-xl:hidden"
            >
              <svg
                width="15"
                height="8"
                viewBox="0 0 15 8"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM15 3.5L1 3.5V4.5L15 4.5V3.5Z"
                  fill="white"
                />
              </svg>

              <span>Назад в каталог</span>
            </Link>

            <div className="text-center text-2xl xl:text-[40px] uppercase font-light">
              {categoryName}
            </div>
          </div>

          <ProductsCatalogWP numberOfPosts={undefined} categoryId={id} />
        </div>
      </main>
    </>
  );
}
