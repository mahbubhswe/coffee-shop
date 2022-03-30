import Link from "next/link";
import React from "react";
import OrderProcessLayout from "../../components/OrderProcessLayout";

export default function Index() {
  return (
    <OrderProcessLayout StepperValue={2}>
      <div
        style={{
          width: "80%",
          margin: "auto",
          color: "green",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Your order successfully confirmed.
        <Link href="/" passHref>
          <a> Go to shopping</a>
        </Link>
      </div>
    </OrderProcessLayout>
  );
}
