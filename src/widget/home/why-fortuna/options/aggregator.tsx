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
                summary="Experience unparalleled profit potential with an AI-driven yield aggregator. Effortlessly
maximize earnings across chains through intelligent yield optimizers ."
              />
            </div>

            <Yield />
          </div>
        </div>
      </div>
    </div>
  );
}
