"use client";

// export default function ErrorBoundary() {
//   return <div> Error in review id</div>;
// }
//the rest of ui will remain unaffected
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <div>{error.message}</div> <button onClick={reset}>Try again</button>
    </div>
  );
}
