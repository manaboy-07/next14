/** @format */

//creating nested layout for specific components
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
