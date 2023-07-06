import React from "react";
import Image from "next/image";
import keyRoute from "../../../../../public/pool.png";

export default function Pool() {
  return (
    <Image className="inline-block float-right" src={keyRoute} alt="Key" />
  );
}
