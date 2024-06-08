"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
export default function Navbar(params) {
  const currentRoute = usePathname();
  const homeRef = useRef();
  const blogRef = useRef();
  const guploadRef = useRef();
  const pollscoreRef = useRef();
  const modalRef = useRef();
  const carouselRef = useRef();
  const [lineOffSet, setLineOffSet] = useState({ width: 87, left: 7 });
  useEffect(() => {
    currentRoute === "/"
      ? setLineOffSet({
          width: homeRef.current.offsetWidth,
          left: homeRef.current.offsetLeft,
        })
      : currentRoute.includes("/blog")
      ? setLineOffSet({
          width: blogRef.current.offsetWidth,
          left: blogRef.current.offsetLeft,
        })
      : currentRoute.includes("/GUpload")
      ? setLineOffSet({
          width: guploadRef.current.offsetWidth,
          left: guploadRef.current.offsetLeft,
        })
      : currentRoute.includes("/PollScore")
      ? setLineOffSet({
          width: pollscoreRef.current.offsetWidth,
          left: pollscoreRef.current.offsetLeft,
        })
      : currentRoute.includes("/Modal")
      ? setLineOffSet({
          width: modalRef.current.offsetWidth,
          left: modalRef.current.offsetLeft,
        })
      :currentRoute.includes("/Carousel")
      ? setLineOffSet({
          width: carouselRef.current.offsetWidth,
          left: carouselRef.current.offsetLeft,
        })
      :
       null;
  }, [currentRoute]);
  // const handleClick = (e) => {
  //   console.log(e.target.offsetLeft);
  //   setLineOffSet({ width: e.target.offsetWidth, left: e.target.offsetLeft });
  //   //line.style.width=e.target.offsetWidth+ 'px'
  //   //line.style.left=e.target.offsetleft +'px'
  // };
  return (
    <div className={styles.container}>
      <div className={`${styles.main} ${styles.tab_box}`}>
        <Link
          className={`${styles.tab_btn} ${
            currentRoute === "/" ? styles.active : null
          }`}
          ref={homeRef}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.tab_btn} ${
            currentRoute.includes("/blog") ? styles.active : null
          }`}
          ref={blogRef}
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className={`${styles.tab_btn} ${
            currentRoute === "/GUpload" ? styles.active : null
          }`}
          ref={guploadRef}
          href="/GUpload"
        >
          GUpload
        </Link>
        <Link
          className={`${styles.tab_btn} ${
            currentRoute === "/PollScore" ? styles.active : null
          }`}
          ref={pollscoreRef}
          href="/PollScore"
        >
          PollScore
        </Link>
        <Link
          className={`${styles.tab_btn} ${
            currentRoute === "/Modal" ? styles.active : null
          }`}
          ref={modalRef}
          href="/Modal"
        >
          Modal
        </Link>
        <Link
          className={`${styles.tab_btn} ${
            currentRoute === "/Carousel" ? styles.active : null
          }`}
          ref={carouselRef}
          href="/Carousel"
        >
          Carousel
        </Link>
        <div
          className={styles.line}
          style={{ width: lineOffSet.width, left: lineOffSet.left }}
        ></div>
      </div>
    </div>
  );
}
