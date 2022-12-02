import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-full flex flex-col overflow-hidden">
      <div className="relative border-2 border-red">
        <Header />
      </div>

      <main className="flex flex-1 ">{children}</main>

      <Footer />
    </div>
  );
}
