/** @format */

//creating nested layout for specific components
//this is for all realting to layout
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <h2>Features Products</h2>
    </main>
  );
}
