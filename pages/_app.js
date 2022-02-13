import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
