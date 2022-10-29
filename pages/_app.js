import "../styles/globals.css";
import Layout from "../components/Layout";

import { useEffect } from "react";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("hashChangeStart", () => {
      document.documentElement.style.scrollBehavior = "smooth";
    });
    router.events.on("routeChangeStart", () => {
      document.documentElement.style.scrollBehavior = "auto";
    });
  }, [router]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
