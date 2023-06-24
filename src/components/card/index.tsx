import classNames from "classnames";
import React from "react";
import Typography from "../typography";

type componentProps = {
  theme?: "transparent";
  children?: React.JSX.Element;
  className?: string;
  title?: string;
};
export default function Card({
  theme = "transparent",
  className,
  children,
  title,
}: componentProps) {
  const bgStyles = classNames({
    "bg-transparent-color": theme == "transparent",
  });
  return (
    <>
      {title && (
        <Typography label={title} className="!font-inter !text-white mb-2" />
      )}
      <div
        className={`${bgStyles} lg:p-[24px] md:p-[20px] relative p-[16px] ${className}`}
      >
        {children}
      </div>
    </>
  );
}
