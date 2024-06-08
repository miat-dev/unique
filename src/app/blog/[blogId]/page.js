"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./page.css";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
export default function Home(params) {
  console.log(">>>> ", params);
  useEffect(() => {
    console.log("Hello world");
  }, []);
  const handleButton = () => {
    console.log("Hello Owaid");
    alert("Hello Owaid");
  };
  const [data]=useState('/blog/1');
  return (
    <div>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      {params?.params.blogId && (
        <strong>
          <u>
            <div>You are on the blog number {params.params.blogId}</div>
          </u>
        </strong>
      )}
      <li>sd</li>
      <li>d</li>
      <li>dfghjk</li>
      <button onClick={handleButton}>Owaid</button>
      <br />
      <br />
      <div className="btn-nav">
        {/* <Link href={{pathname:'/blog'}} className="btn">
          <BiChevronsLeft />
        </Link>
        <Link className="btn">
          <BiChevronsRight />
        </Link> */}
      </div>
    </div>
  );
}
