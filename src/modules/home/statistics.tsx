import Card from "@/components/card";
import Typography from "@/components/typography";
import React from "react";

export default function Statistics() {
  const data = [
    {
      value: "$24,000",
      name: "Total Staked Value",
    },
    {
      value: "$4,000",
      name: "$FTN Balance",
    },
    {
      value: "$1,000",
      name: "Other Assets",
    },
    {
      value: "%15",
      name: "% ROI Earned",
    },
  ];

  return (
    <Card className="!rounded-[16px] mb-4">
      <div>
        <Typography
          variant="semi-heading"
          className="!font-aeonik-pro !text-center pb-4"
          label="Statistics"
        />

        <div className="bg-transparent-secondary md:flex lg:justify-around md:py-6 py-9 rounded-[8px] grid grid-cols-2 text-center">
          {data?.map((_stac, index) => {
            return (
              <div
                key={index}
                className={`md:mt-0 ${index < 1 ? "mb-10" : ""} `}
              >
                <Typography
                  className="!text-[32px] !font-aeonik-pro !text-[#EFF3FB] !font-bold"
                  label={_stac?.value}
                />
                <Typography
                  variant="body1"
                  className="!font-inter !text-gray-400"
                  label={_stac?.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
