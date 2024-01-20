import React from 'react';
import { CardBorder, CardHeader } from '.';
import gradient3 from '../../../../../public/border-gradient-3.png';
import Yield from '../icons/yield';
import Pool from '../icons/pool';

export default function PoolCreation() {
  return (
    <div className=" px-5 md:px-[25px] py-[23px] overflow-hidden">
      <CardBorder img={gradient3} />

      <div className="mb-4">
        <CardHeader
          title="Popular Pools"
          summary="Discover all the trending farms and pools imported directly on our platform"
        />
      </div>
      <div className="md:-mb-[160px] -mb-[130px] flex justify-center relative overflow-hidden md:mt-0 mt-10">
        <Pool />
      </div>
    </div>
  );
}
