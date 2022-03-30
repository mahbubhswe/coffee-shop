import React from "react";
import styles from "../styles/OrderProcessLayout.module.css";
import { Stepper, Step } from "react-form-stepper";

export default function OrderProcessLayout({ StepperValue, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.stepper}>
        <Stepper activeStep={StepperValue}>
          <Step label="Shipping Address" />
          <Step label="Payment" />
          <Step label="Confirm" />
        </Stepper>
      </div>
      <main className={styles.contant}>{children}</main>
    </div>
  );
}
