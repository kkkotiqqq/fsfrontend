// export function getProduct(id) {
//   return fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_API_PATH}/products/${id}?populate=*`,
//     {
//       next: { revalidate: 60 },
//     }
//   ).then((res) => res.json());
// }
