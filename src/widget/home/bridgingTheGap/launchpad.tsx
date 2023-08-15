import Typography from "@/components/typography";
import React from "react";
import launchpad from "public/launchpad.png";
import Image from "next/image";

export default function Launchpad() {
  return (
    <div className="bg-[#171717] h-full p-8 pb-[150px] text-start rounded-[20px] p-8">
      <Typography
        variant="body0.5"
        className="!font-inter !text-light-2"
        label="STAKEPAD"
      />

      <div className="mt-16">
        <Image className="w-[300px] mb-9" src={launchpad} alt="" />
        <Typography
          className="!font-inter-bold font-bold text-white !text-[35px] !leading-[40px]"
          variant="semi-subtitle"
        >
          <>
            Advanced <div /> launchpad for <div></div>staking
          </>
        </Typography>
      </div>
    </div>
  );
}
