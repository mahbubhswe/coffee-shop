import "../styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import { ReactNotifications } from "react-notifications-component";

import "aos/dist/aos.css";
import StoreProvider from "../utils/Store";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <StoreProvider>
      <ReactNotifications></ReactNotifications>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
