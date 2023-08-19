import React from "react";
import { CardBorder, CardHeader, cardClass } from ".";
import Key from "../icons/key";
import gradient2 from "../../../../../public/border-gradient-5.png";

export default function Secure() {
  return (
    <div>
      <div className={`${cardClass}`}>
        <div className=" px-5 md:px-[33px] py-[31px] overflow-hidden">
          <CardBorder img={gradient2} />

          <div className="relative overflow-hidden">
            <div className="md:flex">
              <CardHeader
                title="Secure - ZERO Risk "
                summary="All the smart contracts are thoroughly audited and all the funds locked are covered by insurance. "
              />
              <div className="md:w-1/2 relative overflow-hidden md:mt-0 mt-10">
                <Key />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
