import React from "react";
import Image from "next/image";
import keyRoute from "../../../../../public/fancy-key.png";

export default function Key() {
  return (
    <Image className="inline-block float-right" src={keyRoute} alt="Key" />
  );
}
