import { Metadata } from "next";
import "../styles/globals.css";

import Header from "@/components/header";
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
    <html lang="en">
      <body className={raleway.className}>
        <div className="relative min-h-full flex flex-col overflow-hidden bg-dark-grey">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
