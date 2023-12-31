export function getProductWP(id) {
  return fetch(
    `https://fsladmin.paxcore.ru/wp-json/wp/v2/product/${id}?_embed`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());
}
