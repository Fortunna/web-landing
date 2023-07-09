import React from "react";
import cryptoChain from "../../../../../public/cryptoChain.png";
import Image from "next/image";

export default function Build() {
  return (
    <div>
      <Image src={cryptoChain} className="max-w-full" alt="" />
    </div>
  );
}
