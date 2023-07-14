import Button from "@/components/button";
import AppLogo from "@/components/logo";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import MobileHeader from "./mobileHeader";
// import video_src from "../../public/hero-video.mp4";
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
  // {
  //   title: "Faq",
  //   to: "/faq",
  // },
];
export default function Header() {
  const videoRef = useRef("");
  const [isClient, setIsClient] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // useEffect(() => {
  //   if (router.isReady) {
  //     document.querySelector(".video")?.play();
  //   }
  //   // videoRef.current.play();
  // }, [videoRef, isClient, router.isReady]);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <>
      <div className=" overflow-hidden relative bg-[url('/hero-black-hole_mask-group.png')]">
        <video
          // ref={videoRef}
          muted
          loop
          autoPlay
          className="md:!h-screen video !w-screen object-fill"
        >
          <source src={"/hero-video.mp4"} type="video/webm" />
        </video>

        <div className="w-full h-full bg-[url('/hero-gradient.png')] bg-cover lg:px-[40px] px-4 absolute top-0">
          <div className=" flex justify-between items-center md:py-[35px] py-[10px]">
            <AppLogo />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] md:hidden cursor-pointer"
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

            <div className=" md:flex hidden">
              {navs.map((_nav, index) => {
                return (
                  <nav
                    className="!text-white px-3 !font-aeonik-pro"
                    key={index}
                  >
                    {_nav.title}
                  </nav>
                );
              })}
            </div>

            <div className="md:flex hidden">
              <Button label="Launch App" />
            </div>
          </div>
        </div>
      </div>
      {showMobile ? (
        <MobileHeader onClose={() => setShowMobile(false)} />
      ) : null}
    </>
  );
}
