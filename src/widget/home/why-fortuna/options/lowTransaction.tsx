import React from "react";
import { CardBorder, CardHeader, cardClass } from ".";
import gradient4 from "../../../../../public/border-gradient-4.png";
import Yield from "../icons/yield";
import Fee from "../icons/fee";

export default function LowTransaction() {
  return (
    <div className={`${cardClass}  h-[390px] relative`}>
      <div className="px-5 md:px-[33px] py-[31px] ">
        <div className=" overflow-hidden">
          <CardBorder img={gradient4} />

          <div className="mb-10">
            <CardHeader
              title="Stakepad"
              summary="An intuitive platform that enables effortless creation of staking and farming products , also serving as a bridge, enabling projects to connect with liquidity providers."
            />
          </div>
          <div className="absolute right-10 bottom-7">
            <Fee />
          </div>
        </div>
      </div>
    </div>
  );
}
