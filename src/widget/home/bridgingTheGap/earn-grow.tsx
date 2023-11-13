import Typography from "@/components/typography";
import React from "react";
import brain from "../../../../public/brain.png";
import Images from "next/image";
import earn from "../../../../public/Graphic-Transactions.png";
import Link from "next/link";

export default function EarnGrow() {
  const hoverStyles =
    "hover:bg-[#311e41] hover:scale-95 hover:shadow-md shadow-white transition-all ";
  return (
    <Link
      href={"https://app.fortunafi.io/earn/farms"}
      target="_blank"
      className={`bg-[#171717] text-start block bg-right-bottom bg-no-repeat p-8 cursor-pointer rounded-[20px] ${hoverStyles}`}
    >
      <Typography
        variant="body0.5"
        className="!font-inter !text-light-2"
        label="EARN AND GROW"
      />

      {/* <div className="mt-20"></div> */}
      <div className="grid grid-cols-[50%_auto] min-h-[230px]">
        <div className="relative">
          <div className="mt-16">
            <Typography
              className="!font-inter-bold font-bold text-white md:!text-[30px] !text-[28px] !leading-[33px] md:!leading-[40px]"
              variant="semi-subtitle"
              label="Earn and Grow"
            />
          </div>

          <div className="absolute bottom-4">
            <div className="flex items-center ">
              <Typography
                variant="body2"
                className="text-white"
                label="Go to Platform"
              />
              <svg
                className="ms-3"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.18182 11.2806L5.01136 10.1215L8.51705 6.61579H0V4.92261H8.51705L5.01136 1.42261L6.18182 0.257834L11.6932 5.7692L6.18182 11.2806Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="">
            <Images src={earn} className="!w-[200px] h-auto" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="mt-44"></div> */}
    </Link>
  );
}
