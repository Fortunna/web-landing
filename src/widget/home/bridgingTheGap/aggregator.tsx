import Typography from "@/components/typography";
import React from "react";
import brain from "../../../../public/brain.png";
import Images from "next/image";

export default function Aggregator() {
  return (
    <div className="bg-[#171717] text-start bg-right-bottom bg-no-repeat p-8 rounded-[20px]">
      <Typography
        variant="body0.5"
        className="!font-inter !text-light-2"
        label="AI AGGREGATOR"
      />

      {/* <div className="mt-20"></div> */}
      <div className="grid grid-cols-[30%_auto] min-h-[230px]">
        <div>
          <div className="mt-16">
            <Typography
              className="!font-inter-bold font-bold text-white !text-[35px] !leading-[40px]"
              variant="semi-subtitle"
              label="AI Yield 
Aggregator"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0">
            <Images src={brain} className="!w-[800px] h-auto" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="mt-44"></div> */}
    </div>
  );
}
