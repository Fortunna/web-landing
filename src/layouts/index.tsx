import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [fixedHeader, setFixedHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Your scroll event handling logic here
      const elemTop = document.querySelector("body")?.getBoundingClientRect();
      if (elemTop && elemTop?.y > -100) {
        setFixedHeader(false);
      } else {
        setFixedHeader(true);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="app-wrapper">
      <Header fixedHeader={fixedHeader}></Header>

      {children}

      <Footer />
    </div>
  );
}
