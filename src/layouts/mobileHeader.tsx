import { AnimateFadeIn, RenderWhenInView } from "@/animations";
import AppLogo from "@/components/logo";
import React, { MouseEventHandler } from "react";

export default function MobileHeader({
  onClose,
}: {
  onClose: MouseEventHandler<SVGSVGElement>;
}) {
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

  return (
    <div
      style={{ backdropFilter: "blur(8px)" }}
      className="h-screen w-full bg-[rgba(0,0,0,.7)] fixed top-0 z-30 px-4 py-[20px]"
    >
      <div className="flex justify-between">
        <AppLogo />

        <>
          <svg
            onClick={onClose}
            className="w-[30px] h-auto cursor-pointer"
            enableBackground="new 0 0 100 100"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 100 100"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon
              fill="#fff"
              points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "
            />
          </svg>
        </>
      </div>

      <div className="mt-20">
        {navs.map((_nav, index) => {
          return (
            <>
              <div>
                <RenderWhenInView triggerOnce={false}>
                  <AnimateFadeIn delay={index / 7}>
                    <nav
                      className="!text-white px-3 py-5 !font-aeonik-pro block w-full"
                      key={index}
                    >
                      {_nav.title}
                    </nav>
                  </AnimateFadeIn>
                </RenderWhenInView>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
