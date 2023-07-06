import classNames from "classnames";
import React from "react";

type componentProps = {
  theme?: "common";
  label: string;
  className?: string;
  leftComponent?: React.ReactElement;
};
export default function Badge({
  theme = "common",
  label,
  leftComponent,
  className,
}: componentProps) {
  const themeStyles = classNames({
    "bg-badge-common ": theme == "common",
  });

  const textStyles = classNames({
    "bg-badge-color  text-transparent bg-clip-text text-[#F7F9FD] ":
      theme == "common",
  });
  return (
    <div className={`px-4 py-[4px] inline-block rounded-full ${themeStyles}`}>
      <div className="flex items-center">
        {leftComponent} <div className={`${textStyles}`}>{label}</div>
      </div>
    </div>
  );
}
