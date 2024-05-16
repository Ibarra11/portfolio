import { Metadata } from "next";
import "../styles/globals.css";

import Footer from "@/components/footer";

import { Raleway } from "next/font/google";
import Header from "@/components/header";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alan Ibarra's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={raleway.className} lang="en">
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
