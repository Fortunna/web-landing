import React from "react";
import { CardBorder, CardHeader, cardClass } from ".";
import gradient2 from "../../../../../public/border-gradient-2.png";
import Yield from "../icons/yield";

export default function Aggregator() {
  return (
    <div>
      <div className={`${cardClass} border-2 md:mb-0 mb-10 `}>
        <CardBorder img={gradient2} />
        <div>
          <div className="md:mb-10 ">
            <CardHeader
              title="AI Yield Aggregator"
              summary="Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor, orci est vehicula "
            />
          </div>

          <Yield />
        </div>
      </div>
    </div>
  );
}
