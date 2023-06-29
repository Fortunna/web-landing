import { Dai, Usdc, Usdt } from "@/components/icons";
import TextInput from "@/components/input";
import Slider from "@/components/slider";
import Typography from "@/components/typography";
import React from "react";

export default function Deposit() {
  const data = [
    {
      value: "1000 DAI",
      icon: <Dai />,
    },
    {
      value: "21 USDC",
      icon: <Usdc />,
    },
    {
      value: "29 USDT",
      icon: <Usdt />,
    },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-[30%_auto] mt-6">
        <Typography
          label="Deposit"
          className="!font-aeonik-pro"
          variant="subtitle"
        />

        <div>
          <div>
            <Typography
              variant="body2"
              className="!font-inter !text-white"
              label="Wallet Balance"
            />
            <div className="flex mt-3">
              {data.map((_d, index) => {
                return (
                  <div key={index} className="flex  mr-3 items-center">
                    {_d.icon}

                    <Typography
                      variant="body3"
                      className="!text-secondary ms-2 "
                      label={_d.value}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}
