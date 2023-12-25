import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productsid: string;
  };
};
//the generate Metadata function can also be async
//for the normal convention , you can check the docs
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productsid}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

function ProductDetails({ params }: Props) {
  return <div>Product Details Page for {params.productsid}</div>;
}

export default ProductDetails;
