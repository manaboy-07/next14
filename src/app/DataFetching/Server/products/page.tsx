import React from "react";

type Product = {
  title: string;
  price: number;
  description: string;
};
async function ProductPage() {
  const response = await fetch("https://localhost:3001/products", {
    cache: "no-store",
  });

  const responses = await fetch("https://localhost:3001/products", {
    next: {
      revalidate: 10,
    },
  });
  const products = await response.json();
  const productsRevalidate = await responses.json();
  return (
    <>
      {products.map((product: Product) => (
        <h1>{product.title}</h1>
      ))}
      <h1>Page</h1>
    </>
  );
}

export default ProductPage;
