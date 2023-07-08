import React from "react";
import Image from "next/image";
import ballRoute from "../../../../../public/ball.png";

export default function Ball() {
  return (
    <Image
      className="inline-block max-w-full md:w-[256px] md:h-[256px] w-[140px] h-[140px]"
      src={ballRoute}
      alt="Key"
    />
  );
}
