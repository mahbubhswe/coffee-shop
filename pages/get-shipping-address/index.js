import React, { useContext, useState } from "react";
import styles from "../../styles/SetShippingInfo.module.css";
import "react-phone-number-input/style.css";
import { contextStore } from "../../utils/Store";
import { useRouter } from "next/router";
import OrderProcessLayout from "../../components/OrderProcessLayout";
export default function GetShipping() {
  const { state, dispatch } = useContext(contextStore);
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState({
    name: String,
    address: String,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
    const orderInfo = {
      name: customerInfo.name,
      address: customerInfo.address,
    };

    dispatch({ type: "ORDER_INFO", payload: orderInfo });
    router.push("/payment");
  };
  return (
    <OrderProcessLayout StepperValue={0}>
      <h1 style={{ color: "gray", textAlign: "center" }}>Shipping Address</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.inputContainer}>
          <label className={styles.labelTag}>Your Name</label>
          <input
            className={styles.inputTag}
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, name: e.target.value })
            }
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.labelTag}>Address</label>

          <input
            className={styles.inputTag}
            required
            type="text"
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, address: e.target.value })
            }
            placeholder="Example: 11/3,Collage Rood, Sherpur,Mymenshingh,Dhaka,Bangladesh"
          ></input>
        </div>

        <button type="submit" className={styles.btn}>
          Continue
        </button>
      </form>
    </OrderProcessLayout>
  );
}
