import Link from "next/link"
export default function Home() {
  return (
    <main>
    Hello World
    <Link href='/blog'>Blog</Link>
    <Link href='/products'>Products</Link>
    </main>
  )
}
