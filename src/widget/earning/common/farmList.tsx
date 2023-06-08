import Button from "@/components/button";
import Typography from "@/components/typography";
import React from "react";
import Image from "next/image";

type componentProps = {
  onSwap: Function;
  onAddLiquidity: Function;
  amount: string;
  platform: {
    name: string;
    imaage: string;
  };
};
export default function FarmList({}: any) {
  return (
    <div
      style={{ backgroundColor: "rgba(27, 28, 32, 0.6)" }}
      className="lg:p-[32px]"
    >
      <div className="flex flex-row justify-between">
        <div className="w-[70%]">
          <div className="flex flex-row items-center">
            <Image
              width={50}
              height={40}
              className="mr-2"
              alt="Farm"
              src={"/farm.svg"}
            />
            <Typography variant="subtitle" label="stkBNB/BNB" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-[32px] ">
            <div>
              {" "}
              <Typography
                variant="body3"
                className="!font-poppins-light text-light-2"
                label="Platform"
              />
              <div className="flex items-center mt-2">
                <Image
                  className="mr-2"
                  alt="Icon"
                  width={28}
                  height={28}
                  src={"/icon.svg"}
                />
                <Typography variant="heading" label="Pancakeswap V2" />
              </div>
            </div>
            <div>
              <Typography
                variant="body3"
                className="!font-poppins-light text-light-2"
                label="Total Value Locked"
              />
              <div className="mt-2">
                {/* <Image /> */}
                <Typography variant="heading" label="$40" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <div>
            <Button
              theme="secondary"
              label="Swap"
              rightComponent={
                <svg
                  className="ms-1"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_51_30003)">
                    <path
                      d="M0.705078 5.3125L5.39258 0.625M5.39258 0.625H0.705078M5.39258 0.625V5.3125"
                      stroke="#FCFCFC"
                      stroke-width="0.9375"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_51_30003">
                      <rect
                        width="6.25"
                        height="6.25"
                        fill="white"
                        transform="translate(0.0800781)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
              className="!font-poppins-light w-[170px]"
            />
            <div className="mt-3"></div>
            <Button
              theme="secondary"
              className="!font-poppins-light w-[170px]"
              outline
              rightComponent={
                <svg
                  className="ms-1"
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_51_30003)">
                    <path
                      d="M0.705078 5.3125L5.39258 0.625M5.39258 0.625H0.705078M5.39258 0.625V5.3125"
                      stroke="#FCFCFC"
                      stroke-width="0.9375"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_51_30003">
                      <rect
                        width="6.25"
                        height="6.25"
                        fill="white"
                        transform="translate(0.0800781)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
              label="Add Liquidity"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
