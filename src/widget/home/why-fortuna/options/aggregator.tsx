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
        <div className="md:mb-10 flex flex-row md:flex-col">
          <CardHeader
            title="AI Yield Aggregator"
            summary="Our yield optimizer scans the DeFi market to find and invest in the safest and highest yield generating pools"
          />
          <Image src={Yield} className="w-[388px] h-[352]" alt="yield" />
        </div>
      </div>
    </div>
  );
}
