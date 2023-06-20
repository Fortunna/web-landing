import classNames from "classnames";
import React from "react";

type componentProps = {
  theme?: "transparent";
  children?: React.JSX.Element;
};
export default function Card({
  theme = "transparent",
  children,
}: componentProps) {
  const bgStyles = classNames({
    "bg-transparent-color": theme == "transparent",
  });
  return (
    <div className={`${bgStyles} lg:p-[24px] md:p-[20px] relative p-[16px]`}>
      {children}
    </div>
  );
}
