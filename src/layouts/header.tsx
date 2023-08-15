import Button from "@/components/button";
import AppLogo from "@/components/logo";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import MobileHeader from "./mobileHeader";
import Link from "next/link";
import classNames from "classnames";
const navs = [
  {
    title: "About",
    to: "#about",
  },
  {
    title: "Docs",
    to: "https://fortuna-defi.gitbook.io/fortuna-product-docs/",
  },
  {
    title: "Governance",
    to: "#",
  },
  // {
  //   title: "Faq",
  //   to: "/faq",
  // },
];
export default function Header({ fixedHeader }: { fixedHeader: boolean }) {
  const videoRef = useRef("");
  const [isRefresh, setIsRefresh] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const id = router?.asPath?.replace("/", "");
    if (id) {
      const _item = document?.querySelector(id);
      console.log(_item);
    }
  }, []);

  const headerStyles = classNames({
    "!bg-black !fixed": fixedHeader,
  });
  return (
    <>
      <div
        // onScroll={handleScroll}
        id="bg-wrapper"
        className=" overflow-hidden relative -bg-[url('/hero-black-hole_mask-group.png')]"
      >
        <div
          className={`${headerStyles} transition-all z-20 absolute md:px-10 px-5 w-screen left-0`}
        >
          <div
            className={` flex justify-between items-center ${
              fixedHeader ? "md:py-[20px] shadow-md" : "md:py-[35px]"
            } py-[10px] `}
          >
            <AppLogo />
            <div className=" md:hidden flex items-center cursor-pointer">
              <a
                target="_blank"
                href="https://app.fortunafi.io/"
                className="mr-3"
              >
                <Button size="small" label="Launch App" />
              </a>

              <svg
                className="w-[30px]"
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                onClick={() => setShowMobile(true)}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#e5e7ed"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </div>

            <div className="md:flex hidden">
              <div className="md:flex mr-9 items-center">
                {navs.map((_nav, index) => {
                  return (
                    <Link key={index} href={_nav.to}>
                      <nav className="!text-white px-3 !text-[17px] !font-aeonik-pro">
                        {_nav.title}
                      </nav>
                    </Link>
                  );
                })}
              </div>
              <Link href={"https://app.fortunafi.io/"} target="_blank">
                <Button label="Launch App" />
              </Link>
            </div>
          </div>
        </div>
        {/* <video
          // ref={videoRef}\
          playsInline
          muted
          loop
          autoPlay
          className="md:!h-[65vh] video !w-screen object-fill"
        >
          <source src={"/hero-video-play.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      {showMobile ? (
        <MobileHeader onClose={() => setShowMobile(false)} />
      ) : null}
    </>
  );
}
