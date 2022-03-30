import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "../../styles/Cart.module.css";
import { contextStore } from "../../utils/Store";
export default function Home() {
  const { state, dispatch } = useContext(contextStore);
  const products = state.cart.cartItems;
  const [deliveryCharge, setDeliveryCharge] = useState(50);

  if (products.length == 0) {
    return (
      <div
        style={{
          width: "99%",
          margin: "auto",
          textAlign: "center",
          fontSize: "25px",
          marginTop: "120px",
        }}
      >
        Sorry, Your cart is empty. Go to{" "}
        <Link href="/" passHref>
          <a>shopping</a>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {products.map((item) => (
          <div key={item.id} className={styles.singleItem}>
            <Image src={item.img} alt={item.name} width={120} height={110} />

            <div style={{ width: "100%" }}>
              <div className={styles.info}>
                <p>Item Name</p>
                <p>Qty</p>
                <p>Price</p>
                <p>Remove</p>
              </div>
              <div className={styles.info}>
                <p>{item.name}</p>

                <p>
                  <i
                    onClick={() =>
                      dispatch({ type: "CART_MINUS", payload: item })
                    }
                    className="fas fa-minus-circle"
                  ></i>
                  {item.qty}
                  <i
                    onClick={() =>
                      dispatch({ type: "CART_PLUS", payload: item })
                    }
                    className="fas fa-plus-circle"
                  ></i>
                </p>
                <p>{"$" + item.price}</p>
                <p>
                  <i
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: item })
                    }
                    style={{ color: "#BB7621", cursor: "pointer" }}
                    className="fas fa-times-circle"
                  >
                    Remove
                  </i>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.itemInfo}>
        <div className={styles.textInfo}>
          <p>Subtotal: {products.reduce((a, c) => a + c.price * c.qty, 0)}</p>
          <p style={{ display: "flex" }}>
            Delivery Charge:
            <select
              className={styles.selectTag}
              onChange={(e) => setDeliveryCharge(Number(e.target.value))}
            >
              <option selected value={50}>
                Inside Dhaka(50 tk)
              </option>
              <option value={100}>Outside Dhaka(100 tk)</option>
            </select>
          </p>
          <hr></hr>
          <p>
            Total:
            {products.reduce((a, c) => a + c.price * c.qty, 0) + deliveryCharge}
          </p>
        </div>
        <Link href={"/get-shipping-address"} passHref>
          <a className={styles.btn}>Buy Now</a>
        </Link>
      </div>
    </div>
  );
}
