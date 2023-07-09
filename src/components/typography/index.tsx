import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { createElement } from "react";

type ComponentProps = {
  use?: "h1" | "h2" | "h3" | "p" | "a" | "span" | "div";
  variant?:
    | "big-title"
    | "title"
    | "subtitle"
    | "semi-subtitle"
    | "semi-heading"
    | "heading"
    | "body0.5"
    | "body1"
    | "body2"
    | "body3";
  label?: string;
  color?: string;
  className?: string;
  href?: string;
  children?: React.ReactElement;
};
export default function Typography({
  className,
  use = "p",
  variant = "body1",
  color,
  href,
  children,
  label,
  ...props
}: ComponentProps) {
  const classes = classNames({
    // "text-caption-1 text-light-4 font-poppins-bold ": variant == "body1",
    // "text-blue text-caption-0.5 font-aeonik-pro ": variant == "body0.5",
    "text-caption-2 text-harsh font-inter ": variant == "body2",
    "text-caption-3 text-light-harsh font-inter ": variant == "body3",
    "md:text-lg text-[14px] text-light-harsh  font-inter-light leading-[25px]":
      variant == "heading",
    "md:text-heading text-[36px] text-white !font-aeonik-pro !font-bold md:leading-[70px] leading-[42px]":
      variant == "title",
    "md:text-sub-title-heading text-[30px] text-[#fdfdfd] !font-aeonik-pro !font-bold md:leading-[60px] leading-[37px]   ":
      variant == "subtitle",
    "md:text-[38px] text-[30px]  text-[#fff] !font-aeonik-pro !font-bold leading-[60px]":
      variant == "semi-subtitle",
    "text-semi-heading  text-white font-aeonik-fono font-bold":
      variant == "semi-heading",
  });

  return createElement(
    use,
    {
      className: `${classes} ${className || ""}`,

      ...props,
    },
    label || children
  );
}
