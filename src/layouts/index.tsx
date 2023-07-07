import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header></Header>

      {children}

      <Footer />
    </div>
  );
}
