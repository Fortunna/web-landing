import Typography from "@/components/typography";
import React from "react";
import brain from "../../../../public/brain.png";
import Images from "next/image";
import Link from "next/link";

export default function Aggregator() {
  const hoverStyles =
    "hover:bg-[#311e41] hover:scale-95  hover:shadow-md shadow-white transition-all ";

  return (
    <Link
      href={"https://app.fortunafi.io/earn/farms"}
      target="_blank"
      className={`bg-[#171717] text-start block bg-right-bottom bg-no-repeat p-8 cursor-pointer rounded-[20px] ${hoverStyles}`}
    >
      <Typography
        variant="body0.5"
        className="!font-inter !text-light-2"
        label="AI AGGREGATOR"
      />

      {/* <div className="mt-20"></div> */}
      <div className="md:grid md:grid-cols-[30%_auto] min-h-[230px] md:bg-[url(/brain.png)] bg-no-repeat  bg-[length:500px_auto] bg-[right_-30px]">
        <div>
          <div className="w-[120%] md:hidden my-[-30px]">
            <Images src={brain} alt="" />
          </div>
          <div className="md:mt-16 ">
            <Typography
              className="!font-inter-bold font-bold text-white md:!text-[35px] !text-[26px] !leading-[33px] md:!leading-[40px]"
              variant="semi-subtitle"
              label="AI Yield 
Aggregator"
            />
          </div>
        </div>
        <div className="relative">
          <div className=" top-0">
            {/* <Images src={brain} className="!w-[800px] h-auto" alt="" /> */}
          </div>
        </div>
      </div>

      {/* <div className="mt-44"></div> */}
    </Link>
  );
}
