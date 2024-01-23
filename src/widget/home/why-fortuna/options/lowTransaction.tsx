import React from 'react';
import { CardBorder, CardHeader } from '.';
import gradient4 from '../../../../../public/border-gradient-4.png';
import Yield from '../icons/yield';
import Fee from '../icons/fee';

export default function LowTransaction() {
  return (
    <div className="px-5 md:px-[25px] py-[23px] ">
      <div className=" overflow-hidden">
        <CardBorder img={gradient4} />

        <div className="md:mb-10">
          <CardHeader
            title="Stakepad"
            summary="Enabling effortless creation of staking and farming products"
          />
        </div>
        <div className="absolute right-10 bottom-7">
          <Fee />
        </div>
      </div>
    </div>
  );
}
