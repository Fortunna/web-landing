import React from "react";
import { CardBorder, CardHeader, cardClass } from ".";
import gradient2 from "../../../../../public/border-gradient-2.png";
import Yield from "../icons/yield";

export default function Aggregator() {
  return (
    <div>
      <div className={`${cardClass} border-2 md:mb-0 mb-10 `}>
        <div className="px-5 md:px-[33px] py-[31px] overflow-hidden">
          <CardBorder img={gradient2} />
          <div>
            <div className="md:mb-10 ">
              <CardHeader
                title="AI Yield Aggregator"
                summary="Our 'Oracle' - A fully automated yield aggregator that maximizes your yields passively ."
              />
            </div>

            <Yield />
          </div>
        </div>
      </div>
    </div>
  );
}
