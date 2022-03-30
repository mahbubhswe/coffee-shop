import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import styles from "../styles/Slider.module.css";
import bg from "../public/img/csp1.gif";
import Image from "next/image";
import Link from "next/link";
export default function Slider() {
  return (
    <div>
      {" "}
      <Image
        className={styles.sldImg}
        src={bg}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div
        className={styles.item}
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h1>
          {" "}
          <Typewriter
            options={{
              strings: ["Need Refreshment?", "Are You Felling Hot?"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <Link
          href="/cart"
          passHref
          data-aos="fade-up"
          data-aos-offset="-50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <a className={styles.btn}>Order Now</a>
        </Link>
      </div>
    </div>
  );
}
