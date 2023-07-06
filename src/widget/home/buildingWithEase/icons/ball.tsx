import React from "react";
import Image from "next/image";
import ballRoute from "../../../../../public/ball.png";

export default function Ball() {
  return <Image className="inline-block " src={ballRoute} alt="Key" />;
}
