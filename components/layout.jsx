import { createContext, useRef, forwardRef, useEffect } from "react";
import { useState } from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="min-h-full flex flex-col bg">
      <Header />

      <main className="flex flex-1 ">{children}</main>

      <Footer />
    </div>
  );
}
