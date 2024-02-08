//Do some logic
"use client";
let x = 5;
export default function ReviewID({
  params,
}: {
  params: { reviewid: string; productsid: string };
}) {
  let x = 5;
  if (x != 5) {
    throw new Error("X is not 5");
  }
  return (
    <div>
      Shpwing Results for {params.reviewid} for product {params.productsid}
    </div>
  );
}
