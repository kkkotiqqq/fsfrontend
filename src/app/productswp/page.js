// import ProductsCatalog from "../components/ProductsCatalog";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CatalogFilters from "../components/CatalogFilters";
import ProductsCatalogWP from "../components/ProductsCatalogWP";

async function getProductsWP() {
  const res = await fetch(
    `https://fsladmin.paxcore.ru/wp-json/wp/v2/product?_embed`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductsWP() {
  const products = await getProductsWP();

  return (
    <>
      <section className="relative">
        <CatalogFilters />

        <ProductsCatalogWP numberOfPosts={undefined} cacategoryId={undefined} />
      </section>
    </>
  );
}
