import { Metadata } from "next";
import "../styles/globals.css";

import Footer from "@/components/footer";

import { Raleway } from "next/font/google";
import Header from "@/components/header";
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={raleway.className} lang="en">
      <body className="overflow-x-hidden">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
