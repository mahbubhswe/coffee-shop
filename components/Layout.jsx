import Head from "next/head";
import React, { useContext } from "react";
import Slider from "./Slider";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import { contextStore } from "../utils/Store";
import { useRouter } from "next/router";
export default function Layout({ pageTitle, children }) {
  const router = useRouter();

  const { state } = useContext(contextStore);
  const cartQty = state.cart.cartItems.length;
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : "Walcome to Coffee Shope"}</title>
      </Head>
      <Slider></Slider>
      <main>
        <div
          className={styles.container}
          data-aos="fade-up"
          data-aos-offset="-50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className={styles.itemNav}>
            <Link href="/coffee" passHref>
              <a
                className={
                  router.pathname == "/coffee" ? styles.active : styles.item
                }
              >
                {" "}
                Coffee
              </a>
            </Link>
            <Link href="/iisc-creem" passHref>
              <a
                className={
                  router.pathname == "/iisc-creem" ? styles.active : styles.item
                }
              >
                {" "}
                Iisc Creem
              </a>
            </Link>
            <Link href="/pizza" passHref>
              <a
                className={
                  router.pathname == "/pizza" ? styles.active : styles.item
                }
              >
                {" "}
                Pizza
              </a>
            </Link>
            <Link href="/drinks" passHref>
              <a
                className={
                  router.pathname == "/drinks" ? styles.active : styles.item
                }
              >
                {" "}
                Drinks
              </a>
            </Link>
            <Link href="/cart" passHref>
              <a className={styles.cart}>
                {" "}
                <i className="fas fa-cart-plus"></i>
                <sup>{cartQty ? cartQty : "0"}</sup>
              </a>
            </Link>
          </div>
          <p style={{ padding: "10px" }}></p>
          {children}
        </div>
      </main>
    </>
  );
}
