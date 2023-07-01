import Button from "@/components/button";
import { Dai, Usdc, Usdt } from "@/components/icons";
import TextInput from "@/components/input";
import Select from "@/components/select";
import Slider from "@/components/slider";
import Typography from "@/components/typography";
import React from "react";

export default function Rewards() {
  return (
    <div className="">
      <div className="w-[80%] mt-[35px] mb-[28px] mx-auto">
        <div>
          <div className="flex items-center w-full justify-center">
            <div>
              <div className="flex items-center mb-7 overflow-hidden relative">
                <Dai />
                <TextInput
                  value="30.43"
                  className="rounded-full mx-3 text-white focus:outline-none !border-[#AC6AFF]"
                />
                <Typography
                  label="DAI"
                  variant="body3"
                  className="!font-inter !text-secondary"
                />
              </div>
              <div className="flex items-center mb-7 overflow-hidden relative">
                <Usdc />
                <TextInput
                  value="30.43"
                  className="rounded-full mx-3 text-white focus:outline-none !border-[#AC6AFF]"
                />
                <Typography
                  label="USDC"
                  variant="body3"
                  className="!font-inter !text-secondary"
                />
              </div>
              <div className="flex items-center">
                <Usdt />
                <TextInput
                  value="30.43"
                  className="rounded-full mx-3 text-white focus:outline-none !border-[#AC6AFF]"
                />
                <Typography
                  label="USDC"
                  variant="body3"
                  className="!font-inter !text-secondary"
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          className="w-full mt-[48px]"
          label="Deposit"
          rounded
          theme="secondary-solid"
        />
      </div>
    </div>
  );
}
