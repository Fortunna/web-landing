import React from 'react';
import Image from 'next/image';
import feeRoute from '../../../../../public/stakepad.png';

export default function Fee() {
  return (
    <Image
      className="inline-block max-w-full w-[195px] screen500:w-[300px] float-right"
      src={feeRoute}
      alt="Key"
    />
  );
}
