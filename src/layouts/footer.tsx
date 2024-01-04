import { Discord, TelegramIcon, Twitter } from "@/components/icons";
import AppLogo from "@/components/logo";
import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className=" bg-black py-10">
      <PageWrapper>
        <div className="md:flex md:justify-between items-center">
          <div className="md:block hidden min-w-[30%]">
            <Typography
              variant="body2"
              className="text-light-harsh"
              label="Copyright 2023 Fortuna DeFi"
            />
            <Typography
              variant="body2"
              className="text-light-harsh"
              label="All rights reserved | Privacy | Terms"
            />
          </div>
          <div className=" items-center justify-center mb-10 flex md:hidden">
            <a target="_blank" href={"https://twitter.com/fortunafi_io"}>
              <Twitter fill="rgba(239, 237, 253, 0.70)" />
            </a>
            <div className="mx-3"></div>
            <a target="_blank" href={"https://t.me/fortunafi_io"}>
              <TelegramIcon fill="rgba(239, 237, 253, 0.70)" />
            </a>
          </div>
          <div className="lg:block  flex items-center justify-center">
            <AppLogo />
          </div>
          <div className=" items-center md:flex justify-end hidden min-w-[30%]">
            <a target="_blank" href={"https://twitter.com/fortunafi_io"}>
              <Twitter fill="rgba(239, 237, 253, 0.70)" />
            </a>
            <div className="mx-3"></div>
            <a target="_blank" href={"https://t.me/fortunafi_io"}>
              {" "}
              <TelegramIcon fill="rgba(239, 237, 253, 0.70)" />
            </a>
          </div>
          <div className="block text-center my-10 md:hidden">
            <Typography
              variant="body2"
              className="text-light-harsh"
              label="Copyright 2023 Fortuna DeFi"
            />
            <Typography
              variant="body2"
              className="text-light-harsh"
              label="All rights reserved | Privacy | Terms"
            />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
