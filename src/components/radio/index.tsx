import React from "react";
import Typography from "../typography";
import classNames from "classnames";

type componentProps = {
  checked: boolean;
  label: string;
};
export default function Radio({ checked, label }: componentProps) {
  const stylesClass = classNames({
    "border-[1px] border-[#D9D9D9]": !checked,
    "bg-secondary": checked,
  });
  return (
    <div className="flex items-center">
      <div
        className={`w-[16px] flex items-center justify-center rounded-full h-[16px] ${stylesClass} `}
      >
        {checked ? (
          <div className="w-[5px] bg-white rounded-full h-[5px]"></div>
        ) : null}
      </div>
      <div className="ml-[8px]">
        <Typography
          label={label}
          variant="body2"
          className="!font-aeonik-pro"
        />
      </div>
    </div>
  );
}
