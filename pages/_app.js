import "../styles/globals.css";
import Layout from "../components/Layout";
import useSmoothScroll from "../hooks/useSmoothScroll";

function MyApp({ Component, pageProps }) {
  // const [currentSection, setCurrentSection] = useState("home");
  useSmoothScroll();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
