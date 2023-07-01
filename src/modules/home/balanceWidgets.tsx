import Button from "@/components/button";
import { ArrowRightIcon, InfoIcon, RefreshIcon } from "@/components/icons";
import Typography from "@/components/typography";
import React from "react";

export default function BalanceWidgets() {
  return (
    <>
      <div className="rounded-[16px] p-[1px]">
        <div
          className=" transparent-2  border-2 bg-transparent-2 px-[24px] py-[32px] "
          style={{
            borderImageSource:
              "linear-gradient(98.88deg, #8C01FA 31%, #EB08A4 102.28%)",
            borderImageSlice: 1,
          }}
        >
          <Typography
            variant="subtitle"
            className="!font-aeonik-pro !text-[21px]"
            label="My Balance"
          />
          <Typography
            className="mt-[18px] !font-aeonik-fono mb-[28px] overflow-hidden relative !text-[45px]"
            variant="big-title"
            label="$1724.99"
          />

          <Button
            className="w-full  overflow-hidden relative mb-4"
            theme="secondary"
            label="buy $FORTUNA"
          />

          <div className="flex justify-between w-full bg-background rounded-[8px] border-2 border-[#8c18a3] p-4 items-center">
            <div className="flex items-center">
              <div className="mr-[4px]">
                <InfoIcon />
              </div>

              <Typography
                variant="body1"
                className="!font-inter"
                label="1 ETH = 1,720.83 FTN"
              />
            </div>
            <div className="flex items-center">
              <div className="w-[22px] h-[22px] mr-2 flex items-center rounded-[4px] justify-center cursor-pointer bg-neutrals-7">
                <RefreshIcon />
              </div>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
