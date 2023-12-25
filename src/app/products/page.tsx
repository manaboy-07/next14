/** @format */

import React from "react";
import Link from "next/link";

function Product() {
  return (
    <div>
      <h1>Products</h1>
      <Link href='products/2'>Product 2</Link>
      <Link href='products/1' replace>
        Product 3
      </Link>
    </div>
  );
}

export default Product;
