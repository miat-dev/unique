import Link from "next/link";
export default function Home(params) {
  console.log("Blog>>>> ", params);
  return (
    <div>
      <h1>Blog Page</h1>
      
      <Link href="/blog/1/">Page1</Link> <Link href="/blog/2">page2</Link> <Link href='/blog/3'>Page3</Link>
    </div>
  );
}
