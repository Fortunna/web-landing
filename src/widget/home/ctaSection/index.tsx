import Button from "@/components/button";
import Typography from "@/components/typography";
import React from "react";

export default function CtaSection() {
  return (
    <div className="pt-[200px] bg-black">
      <div className="w-[60%] text-center mx-auto">
        <Typography
          variant="title"
          className="!bg-text-gradient    !mb-[60px]  !text-transparent !bg-clip-text !text-[#F7F9FD]"
          label="Join the world of
permissionless DeFi today"
        />

        <Button rounded theme="dark" size="big" label="Launch App" />
        <div className="mt-[211px] overflow-hidden relative"></div>
      </div>
    </div>
  );
}
