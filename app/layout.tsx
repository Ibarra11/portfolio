import { Metadata } from "next";
import "../styles/globals.css";

import Footer from "@/components/footer";

import { Raleway } from "next/font/google";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
