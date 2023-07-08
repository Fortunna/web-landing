import React from "react";
import Image from "next/image";
import keyRoute from "../../../../../public/pool.png";

export default function Pool() {
  return (
    <Image
      className="inline-block float-right md:w-[77%] sm:max-w-full"
      // style={{ width: "73%" }}
      src={keyRoute}
      alt="Key"
    />
  );
}
