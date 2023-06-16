import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { createElement } from "react";

type ComponentProps = {
  use?: "h1" | "h2" | "h3" | "p" | "a" | "span" | "div";
  variant?:
    | "title"
    | "subtitle"
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
    "text-caption-1 text-light-4 font-poppins-bold ": variant == "body1",
    "text-blue text-caption-0.5 font-aeonik-pro ": variant == "body0.5",
    "text-caption-2 text-white font-dm-sans ": variant == "body2",
    "text-caption-3 text-white font-poppins ": variant == "body3",
    "text-lg text-white font-poppins-semi-bold": variant == "heading",
    "text-heading text-white !font-dm-sans-bold": variant == "title",
    "text-sub-heading  text-white font-poppins-semi-bold ":
      variant == "subtitle",
    "text-semi-heading  text-white font-aeonik-pro-bold":
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
