"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
export default function Carousel() {
  const [imgh] = useState(400);
  return (
    <div className={styles.container}>
      
      <div className={styles.img_box}>
        {/* <Image src="/1.jpg" width={0.461 * imgh} height={imgh} /> */}
        <div className={styles.blank}>fxf</div>
      </div>
      <div className={styles.img_box}>
        <Image src="/2.jpg" width={0.461 * imgh} height={imgh} />
      </div>
      <div className={styles.img_box}>
        <Image src="/3.jpg" width={0.461 * imgh} height={imgh} />
      </div>
      <div className={styles.img_box}>
        <Image src="/4.jpg" width={0.461 * imgh} height={imgh} />
      </div>
      <div className={styles.img_box}>
        <Image src="/5.jpg" width={0.461 * imgh} height={imgh} />
      </div>
    </div>
  );
}
