import React from 'react';
import { CardBorder, CardHeader, cardClass } from '.';
import gradient2 from '../../../../../public/border-gradient-2.png';
import Yield from '../../../../../public/yield.png';
import Image from 'next/image';

export default function Aggregator() {
  return (
    <div className="px-5 md:px-[25px] py-[23px] overflow-hidden">
      <CardBorder img={gradient2} />
      <div className="flex md:flex-col flex-row">
        <div className=" flex flex-row md:flex-col">
          <CardHeader
            title="AI Yield Aggregator"
            summary="Our yield optimizer scans the DeFi market to find and invest in the safest and highest yield generating pools"
          />
          <div className="h-full">
            <Image
              src={Yield}
              className="min-w-[165px] max-h-[145px] screen421:max-h-full screen421:w-[388px]"
              alt="yield"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
