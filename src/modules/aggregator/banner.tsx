import Button from "@/components/button";
import { CancelIcon, PlayIcon } from "@/components/icons";
import Typography from "@/components/typography";
import React from "react";

export default function AggregatorBanner() {
  return (
    <div className="md:grid md:grid-cols-[80%_auto] bg-dark-4 py-6 rounded-[10px] overflow-hidden relative">
      <div className="md:flex md:items-center">
        <div className="flex items-center">
          <div className="mr-2 overflow-hidden relative min-w-[103px] min-h-[103px] max-w-[103px]  max-h-[103px]">
            <video autoPlay loop className=" w-[103px] h-[103px]">
              <source src="/aggregator.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div className="!mr-[28px]">
            <Typography
              className="!text-[18px] !font-aeonik-pro font-bold !whitespace-nowrap"
              label="AI Aggregator"
            />
            <Typography
              variant="body1"
              className="!font-inter !text-[#CFCFCF]"
              label="Yield Aggregator "
            />
            <div className="md:block hidden">
              <Button
                size="small"
                className="!py-1 mt-4"
                leftComponent={
                  <div className="mr-[4px]">
                    <PlayIcon />
                  </div>
                }
                label="Play Video"
                theme="secondary"
              />
            </div>
          </div>
        </div>
        <div className="px-10">
          <Typography
            className="!font-inter-light pt-2 !text-[#CFCFCF]"
            variant="body2"
            label="Lorem ipsum dolor sit amet consectetur. Vitae volutpat convallis morbi non tincidunt. A orci sapien hac in arcu. Sed congue adipiscing amet aliquet sollicitudin lorem a. Ornare leo 
auctor neque mi sit volutpat mauris. Mi ut nisl est mauris arcu mattis ornare.
"
          />

          <div className="block md:hidden">
            <Button
              size="small"
              className="!py-1 mt-4"
              leftComponent={
                <div className="mr-[4px]">
                  <PlayIcon />
                </div>
              }
              label="Play Video"
              theme="secondary"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="absolute right-[70px]">
          <CancelIcon />
        </div>
      </div>
    </div>
  );
}
