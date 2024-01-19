import React from 'react';
import { CardBorder, CardHeader, cardClass } from '.';
import gradient2 from '../../../../../public/border-gradient-2.png';
import Yield from '../icons/yield';

export default function Aggregator() {
  return (
    <div className="px-5 md:px-[25px] py-[23px] overflow-hidden">
      <CardBorder img={gradient2} />
      <div>
        <div className="md:mb-10 ">
          <CardHeader
            title="AI Yield Aggregator"
            summary="Our yield optimizer scans the DeFi market to find and invest in the safest and highest yield generating pools"
          />
        </div>

        <Yield />
      </div>
    </div>
  );
}
