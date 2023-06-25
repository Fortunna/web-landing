import classNames from "classnames";
import React from "react";

type componentProps = {
  theme?: "success" | "errorLight";
  label: string;
  className?: string;
};
export default function Badge({
  theme = "success",
  label,
  className,
}: componentProps) {
  const themeStyles = classNames({
    "bg-success text-[#F7F9FD] ": theme == "success",
    "bg-transparent-error text-danger ": theme == "errorLight",
  });
  return (
    <span
      className={`font-inter px-3 py-[1px]  rounded-full text-caption-0.5 inline-block ${className} ${themeStyles} `}
    >
      {label}
    </span>
  );
}
