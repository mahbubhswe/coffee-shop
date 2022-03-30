import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import OrderProcessLayout from "../../components/OrderProcessLayout";
import styles from "../../styles/OTP.module.css";
import { firebase, auth } from "../../firebase";
import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  const [msg, setMsg] = useState(false);
  // Inputs
  const [number, setnumber] = useState("");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  // Sent OTP
  const sendOtp = () => {
    if (number === "" || number.length < 10) return;
    let verify = verify
      ? verify
      : new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(number, verify)
      .then((result) => {
        setfinal(result);
        setshow(true);
      })
      .catch((err) => {
        alert("Sorry, something is not currect");
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        router.push("/payment");
      })
      .catch((err) => {
        setMsg(true);
      });
  };

  return (
    <OrderProcessLayout StepperValue={1}>
      <div className={styles.container}>
        <div style={{ display: !show ? "block" : "none", textAlign: "center" }}>
          <h1 style={{ color: "gray", textAlign: "center" }}>
            Please enter your phone number
          </h1>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="BD"
            placeholder="Enter phone number"
            value={number}
            onChange={setnumber}
          />
          <div id="recaptcha-container"></div>
          <button
            className="btn"
            style={{ marginTop: "10px", width: "50%" }}
            onClick={sendOtp}
          >
            Send OTP
          </button>
        </div>
        <div style={{ display: show ? "block" : "none", textAlign: "center" }}>
          <h1 style={{ color: "gray", textAlign: "center" }}>
            OTP Varification
          </h1>
          <p
            style={{
              textAlign: "center",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Check your phone, we sent OTP code to {number}. Please enter OTP to
            continue the next step.
          </p>
          <p style={{ display: msg ? "block" : "none", color: "red" }}>
            Sorry, you have entered invalid OTP. Please, enter correct OTP
          </p>
          <input
            style={{ padding: "5px", borderRadius: "5px", outline: "none" }}
            type="text"
            placeholder={"Enter your OTP"}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          ></input>
          <br />
          <button
            className="btn"
            style={{ marginTop: "5px", width: "50%" }}
            onClick={ValidateOtp}
          >
            Continue
          </button>
        </div>
      </div>
    </OrderProcessLayout>
  );
}
