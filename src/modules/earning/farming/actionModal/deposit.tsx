import Button from "@/components/button";
import { Dai, Usdc, Usdt } from "@/components/icons";
import TextInput from "@/components/input";
import Select from "@/components/select";
import Slider from "@/components/slider";
import Typography from "@/components/typography";
import React from "react";

export default function Deposit() {
  return (
    <div className="">
      <div className="grid grid-cols-[30%_auto] mt-[40px]">
        <div>
          <Typography
            variant="heading"
            className="!font-aeonik-pro !text-[#FCFCFC] ps-[30%] mt-1"
            label="DAI"
          />
        </div>
        <div className="w-[70%]">
          <TextInput
            value="30%"
            id="oo"
            rounded
            rightComponent={
              <div className="flex h-full  py-2 items-center justify-center">
                <div className="h-full w-[1px] bg-secondary"></div>
                <Typography
                  variant="body0.5"
                  className="!font-inter ml-[10px] mr-[14px] text-secondary"
                  label="MAX"
                />
              </div>
            }
            className="focus:outline-none w-full focus:border-[#AC6AFF] !border-[#AC6AFF]"
          />
          <div className="mt-[18px]">
            <Slider className="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[30%_auto] mt-[20px]">
        <div>
          <Typography
            variant="heading"
            className="!font-aeonik-pro !text-[#FCFCFC] ps-[30%] mt-1"
            label="USDC"
          />
        </div>
        <div className="w-[70%]">
          <TextInput
            value="30%"
            id="oo"
            rounded
            rightComponent={
              <div className="flex h-full  py-2 items-center justify-center">
                <div className="h-full w-[1px] bg-secondary"></div>
                <Typography
                  variant="body0.5"
                  className="!font-inter ml-[10px] mr-[14px] text-secondary"
                  label="MAX"
                />
              </div>
            }
            className="focus:outline-none w-full focus:border-[#AC6AFF] !border-[#AC6AFF]"
          />

          <div className="mt-[18px]">
            <Slider className="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[30%_auto] mt-[20px]">
        <div>
          <Typography
            variant="heading"
            className="!font-aeonik-pro !text-[#FCFCFC] ps-[30%] mt-1"
            label="USDT"
          />
        </div>
        <div className="w-[70%]">
          <TextInput
            value="30%"
            id="oo"
            rounded
            rightComponent={
              <div className="flex h-full  py-2 items-center justify-center">
                <div className="h-full w-[1px] bg-secondary"></div>
                <Typography
                  variant="body0.5"
                  className="!font-inter ml-[10px] mr-[14px] text-secondary"
                  label="MAX"
                />
              </div>
            }
            className="focus:outline-none w-full focus:border-[#AC6AFF] !border-[#AC6AFF]"
          />
          <div className="mt-[18px]">
            <Slider className="" />
          </div>
        </div>
      </div>

      <div className="w-[80%] mt-[35px] mb-[28px] mx-auto">
        <div className="flex items-center mb-[28px]">
          <div className="mr-9">
            <Typography
              label="Lockup Period"
              variant="body2"
              className="!font-inter"
            />
          </div>
          <div className="inline-block">
            <TextInput
              id="lock-period"
              className="!rounded-full !font-[14px] !text-bold !font-inter text-[#DE1EFD]"
              // type="number"
            />
          </div>

          {/* <Select
            id="lock-period"
            className="whitespace-nowrap px-3 !font-inter font-bold !text-[#DE1EFD] !rounded-full"
            options={[{ title: "No Lock" }]}
          /> */}
        </div>
        <Button
          className="w-full"
          label="Deposit"
          rounded
          theme="secondary-solid"
        />
      </div>
    </div>
  );
}
