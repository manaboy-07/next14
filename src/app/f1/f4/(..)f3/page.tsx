import Link from "next/link";

export default function InterceptedF3() {
  return (
    <>
      <h1>F3 page</h1>
      <div>
        <Link href={"/f1/f2"}>F2</Link>
      </div>
    </>
  );
}