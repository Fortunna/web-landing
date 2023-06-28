import React, { ChangeEventHandler, useState } from "react";
import Typography from "../typography";

type componentProps = {
  className: string;
};
export default function Slider({ className }: componentProps) {
  const [value, setValue] = useState(0);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="flex items-center">
      <input
        onChange={handleChange}
        max={100}
        className={`${className}`}
        type="range"
      />

      <Typography
        variant="body1"
        className="!font-inter ml-[18px]"
        label={value.toString() + "%"}
      />
      <Typography />
    </div>
  );
}
