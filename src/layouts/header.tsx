import Button from "@/components/button";
import AppLogo from "@/components/logo";
import React from "react";

const navs = [
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Docs",
    to: "/docs",
  },
  {
    title: "Governance",
    to: "/governance",
  },
  {
    title: "Faq",
    to: "/faq",
  },
];
export default function Header() {
  return (
    <div className="flex justify-between  h-screen bg-[url('/hero-black-hole_mask-group.png')]">
      <div className="w-full h-full bg-[url('/hero-gradient.png')] bg-cover px-[40px]">
        <div className=" flex justify-between items-center py-[35px]">
          <AppLogo />

          <div className="flex">
            {navs.map((_nav, index) => {
              return (
                <nav className="!text-white px-3 !font-aeonik-pro" key={index}>
                  {_nav.title}
                </nav>
              );
            })}
          </div>

          <div>
            <Button label="Launch App" />
          </div>
        </div>
      </div>
    </div>
  );
}
