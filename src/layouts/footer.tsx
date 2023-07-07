import { Discord, Twitter } from "@/components/icons";
import AppLogo from "@/components/logo";
import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";

export default function Footer() {
  return (
    <div className=" bg-black py-10">
      <PageWrapper>
        <div className="flex justify-between items-center">
          <div>
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
          <div>
            <AppLogo />
          </div>
          <div className="flex items-center">
            <Twitter fill="rgba(239, 237, 253, 0.70)" />
            <div className="mx-3"></div>
            <Discord fill="rgba(239, 237, 253, 0.70)" />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
