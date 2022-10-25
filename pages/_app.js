import { useState, useEffect, useRef } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  // const [currentSection, setCurrentSection] = useState("home");

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
