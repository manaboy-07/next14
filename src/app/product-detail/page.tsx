import React from "react";
import Product from "../products/page";
import Review from "../components/Review";
import { Suspense } from "react";
function ProductDetailPage() {
  return (
    <div>
      <h1>
        Product detail ProductDetailPage
        <Suspense fallback={<p>Loading product detauls...</p>}>
          <Product />
        </Suspense>
        <Suspense fallback={<p>Loading product detauls...</p>}>
          {" "}
          <Review />
        </Suspense>
      </h1>
    </div>
  );
}

export default ProductDetailPage;
