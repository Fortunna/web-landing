import React from 'react';
import Image from 'next/image';
import keyRoute from '../../../../../public/fancy-key.png';

export default function Key() {
  return (
    <Image
      className="inline-block min-w-[150px] float-right max-w-full"
      src={keyRoute}
      alt="Key"
    />
  );
}
