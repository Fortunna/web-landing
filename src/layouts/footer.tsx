import { Discord, Twitter } from "@/components/icons";
import AppLogo from "@/components/logo";
import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";

export default function Footer() {
  return (
    <div className=" bg-black py-10">
      <PageWrapper>
        <div className="md:flex md:justify-between items-center">
          <div className="md:block hidden">
            <Typography
              variant="body2"
              className="text-light-harsh"
              label="Copyright 2023 Futureswap"
            />
            <Typography
              variant="body2"
              className="text-light-harsh"
              label="All rights reserved | Privacy | Terms"
            />
          </div>
          <div className=" items-center justify-center mb-10 flex md:hidden">
            <Twitter fill="rgba(239, 237, 253, 0.70)" />
            <div className="mx-3"></div>
            <Discord fill="rgba(239, 237, 253, 0.70)" />
          </div>
          <div className="lg:block flex items-center justify-center">
            <AppLogo />
          </div>
          <div className=" items-center md:flex hidden">
            <Twitter fill="rgba(239, 237, 253, 0.70)" />
            <div className="mx-3"></div>
            <Discord fill="rgba(239, 237, 253, 0.70)" />
          </div>
          <div className="block text-center my-10 md:hidden">
            <Typography
              variant="body2"
              className="text-light-harsh"
              label="Copyright 2023 Futureswap"
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
