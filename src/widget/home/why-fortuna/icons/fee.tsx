import React from "react";
import Image from "next/image";
import feeRoute from "../../../../../public/fee.svg";

export default function Fee() {
  return (
    <Image className="inline-block float-right" src={feeRoute} alt="Key" />
  );
}
