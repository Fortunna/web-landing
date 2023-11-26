import { Discord, Twitter } from "@/components/icons";
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
            <Link
              target="_blank"
              href={
                "https://x.com/fortunafi_io/status/1728407980339511732?s=46"
              }
            >
              <Twitter fill="rgba(239, 237, 253, 0.70)" />
            </Link>
            <div className="mx-3"></div>
            <Discord fill="rgba(239, 237, 253, 0.70)" />
          </div>
          <div className="lg:block  flex items-center justify-center">
            <AppLogo />
          </div>
          <div className=" items-center md:flex justify-end hidden min-w-[30%]">
            <Link
              target="_blank"
              href={
                "https://x.com/fortunafi_io/status/1728407980339511732?s=46"
              }
            >
              <Twitter fill="rgba(239, 237, 253, 0.70)" />
            </Link>
            <div className="mx-3"></div>
            <Discord fill="rgba(239, 237, 253, 0.70)" />
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
