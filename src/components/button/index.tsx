import classNames from "classnames";
import React from "react";

type componentProps = {
  outline?: boolean;
  theme?: "white" | "secondary" | "dark";
  label: string;
  rightComponent?: React.JSX.Element;
  leftComponent?: React.JSX.Element;
  rounded?: boolean;
  className?: string;
  size?: "default" | "small" | "big";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export default function Button({
  outline = false,
  label,
  className,
  rightComponent,
  leftComponent,
  rounded = false,
  size = "default",
  onClick,
  theme = "white",
}: componentProps) {
  const classRoundedStyles = classNames({
    "rounded-full": rounded,
    "rounded-[6px]": !rounded,
  });

  const themeStyles = classNames({
    "bg-white text-dark": theme == "white" && !outline,
    "border-2 text-light-4 border-light-white": theme == "white" && outline,
    "bg-secondary-gradient text-white border-[1px]  border-black":
      theme == "secondary" && !outline,
    "border-[#AC6AFF] text-white border-[3px]": theme == "secondary" && outline,
    "border-neutrals-6 bg-#212531 text-white border-[1px]": theme == "dark",
  });

  const sizeStyles = classNames({
    "px-[16px] py-[11px]    text-[14px]": size == "default",
    "px-[15px] py-[10px] text-[12px]": size == "small",
    "px-[16px] h-[54px] text-caption-3": size == "big",
  });
  return (
    <button
      onClick={onClick}
      className={`
      flex items-center justify-center
    
      font-aeonik-pro
   
      ${className}
      ${themeStyles}
      ${sizeStyles}
      ${classRoundedStyles}
    `}
    >
      {leftComponent}
      {label}
      {rightComponent}
    </button>
  );
}
