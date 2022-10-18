import Head from "next/head";
import Header from "./header";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Alan Ibarra&#3x9;s Portfolio</title>
      </Head>
      <Header />

      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
