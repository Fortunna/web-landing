import Card from "@/components/card";
import { RefreshIcon } from "@/components/icons";
import Typography from "@/components/typography";
import React from "react";

export default function Balance() {
  const data = [
    {
      name: "Deposited",
      value: "$24,876.09",
    },
    {
      name: "APY",
      value: "156%",
    },
    {
      name: "Rewards",
      value: "$4,456.72",
    },
  ];
  return (
    <>
      <div className="flex items-center mb-[8px]">
        <Typography
          label="Current Balance"
          className="!font-inter !text-white"
        />
        <div className="ml-2 w-[28px] h-[28px] rounded-full bg-transparent-3 flex justify-center items-center">
          <RefreshIcon />
        </div>
      </div>

      <Card>
        <div className="md:grid md:grid-cols-3 gap-4">
          {data?.map((_b, index) => {
            return (
              <div className="md:mt-0 mt-7" key={index}>
                <Typography
                  variant="body2"
                  className="!font-inter mb-2"
                  label={_b.name}
                />
                <div className="p-[1px] bg-secondary-gradient rounded-[8px] overflow-hidden relative">
                  <div className=" w-full bg-background  p-4 items-center rounded-[8px] overflow-hidden relative">
                    <Typography
                      variant="semi-heading"
                      className="!font-inter !font-[19px] !text-right"
                      label={_b.value}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
}
