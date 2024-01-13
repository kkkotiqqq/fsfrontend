export async function getProducts(numberOfPosts, categoryId) {
  const url = `https://fsladmin.paxcore.ru/wp-json/wp/v2/product?_embed${
    numberOfPosts ? `&per_page=${numberOfPosts}` : ""
  }${categoryId ? `&productcat=${categoryId}` : ""}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
