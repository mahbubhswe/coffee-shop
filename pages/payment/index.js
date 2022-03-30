import { useRouter } from "next/router";
import React, { useState } from "react";
import NumberVarification from "../../components/NumberVarification";
import OrderProcessLayout from "../../components/OrderProcessLayout";
import styles from "../../styles/payment.module.css";

export default function Index() {
  const [payment, setPayment] = useState("");
  const router = useRouter();
  const gotPayment = () => {
    if (payment === "ssl") {
      router.push("/api/sslpayment");
    } else {
      router.push("/order-confirmation");
    }
  };
  return (
    <OrderProcessLayout StepperValue={1}>
      <div className={styles.container}>
        <h1 style={{ textAlign: "center", color: "gray" }}>
          Select Payment Method
        </h1>
        <input
          onChange={(e) => setPayment(e.target.value)}
          type="radio"
          id="ssl"
          name="payment"
          value="ssl"
        />
        <label htmlFor="ssl"> SSL(Bkash, Nogod, Roket and Others)</label>
        <br />
        <input
          onChange={(e) => setPayment(e.target.value)}
          type="radio"
          id="cod"
          name="payment"
          value="cod"
        />
        <label htmlFor="cod">Cash on Delivery</label> <br />
        <button
          style={{ display: payment === "ssl" ? "block" : "none" }}
          type="button"
          onClick={gotPayment}
          className={styles.btn}
        >
          Next
        </button>
        {payment === "cod" ? <NumberVarification></NumberVarification> : null}
      </div>
    </OrderProcessLayout>
  );
}
