import classNames from "classnames";
import React from "react";

type componentProps = {
  theme?: "default";
  id: string;
  placeholder?: string;
  className?: string;
  value?: string;
};
export default function TextInput({
  placeholder,
  id,
  className,
  value,
  theme = "default",
}: componentProps) {
  const bgStyles = classNames({
    "bg-transparent-deep text-light-white border-transparent-1":
      theme == "default",
  });

  return (
    <input
      // value={value}
      id={id}
      placeholder={placeholder}
      className={`${bgStyles} ${className}  px-[16px] py-[8px] text-caption-2  rounded h-[40px] border-[1px]`}
    />
  );
}
