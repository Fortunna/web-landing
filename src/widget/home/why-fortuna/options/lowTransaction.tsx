import React from "react";
import { CardBorder, CardHeader, cardClass } from ".";
import gradient4 from "../../../../../public/border-gradient-4.png";
import Yield from "../icons/yield";
import Fee from "../icons/fee";

export default function LowTransaction() {
  return (
    <div className={`${cardClass}   relative`}>
      <div className=" overflow-hidden">
        <CardBorder img={gradient4} />

        <div className="mb-10">
          <CardHeader
            title="Low transaction fees"
            summary="Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed posuere egestas nunc ut tempus. Fu"
          />
        </div>
        <Fee />
      </div>
    </div>
  );
}
