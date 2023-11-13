import React from "react";
import Image from "next/image";
import ballRoute from "../../../../../public/ball.png";

export default function Ball() {
  return (
    <Image
      className="inline-block max-w-full w-[120px] h-auto float-right"
      src={ballRoute}
      alt="Key"
    />
  );
}
