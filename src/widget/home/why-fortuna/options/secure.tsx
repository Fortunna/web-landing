import React from "react";
import { CardBorder, CardHeader, cardClass } from ".";
import Key from "../icons/key";
import gradient2 from "../../../../../public/border-gradient-2.png";

export default function Secure() {
  return (
    <div>
      <div className={`${cardClass}`}>
        <CardBorder img={gradient2} />

        <div className="relative overflow-hidden">
          <div className="md:flex">
            <CardHeader
              title="Secure"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
            />
            <div className="md:w-1/2 relative overflow-hidden md:mt-0 mt-10">
              <Key />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
