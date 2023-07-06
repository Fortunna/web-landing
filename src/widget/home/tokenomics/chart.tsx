import React from "react";
import summary from "../../../../public/summary.png";
import Image from "next/image";

export default function Chart() {
  return (
    <div>
      <Image alt="Summary" src={summary} />
    </div>
  );
}
