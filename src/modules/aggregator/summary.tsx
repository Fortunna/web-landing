import { AnimateFadeIn } from "@/animations";
import Card from "@/components/card";
import Typography from "@/components/typography";
import React from "react";

export default function Summary() {
  const data = [
    {
      value: "$ 15,600,000",
      name: "Total Value Locked",
    },
    {
      value: "135%",
      name: "APY",
    },
    {
      value: "$ 160,000",
      name: "Total Rewards",
    },
  ];

  return (
    <div>
      <div className="flex justify-around py-[56px] overflow-hidden relative rounded-[8px] ">
        {data?.map((_stac, index) => {
          return (
            <div key={index}>
              <AnimateFadeIn animationPosition="leftToRight" delay={index / 4}>
                <>
                  <Typography
                    variant="body1"
                    className="!font-aeonik-pro !font-[20px] !font-white"
                    label={_stac?.name}
                  />
                  <Typography
                    className="!text-[35px] !font-aeonik-pro !text-[#EFF3FB] !font-bold"
                    label={_stac?.value}
                  />
                </>
              </AnimateFadeIn>
            </div>
          );
        })}
      </div>
    </div>
  );
}
