import classNames from "classnames";
import React from "react";

type componentProps = {
  outline?: boolean;
  theme?: "white" | "secondary" | "secondary-solid" | "dark";
  label: string;
  rightComponent?: React.JSX.Element;
  leftComponent?: React.JSX.Element;
  rounded?: boolean;
  className?: string;
  disabled?: boolean;
  size?: "default" | "small" | "big";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export default function Button({
  outline = false,
  label,
  className,
  disabled,
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
    "bg-button-gradient text-white": theme == "secondary" && !outline,
  });

  const sizeStyles = classNames({
    "  py-[8px] px-[12px]   md:text-[14px] text-[12px]": size == "default",
    "  py-[16px] px-[60px] text-[16px]": size == "big",
  });

  const disabledStyles = classNames({
    "opacity-[0.6]": disabled,
  });
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      
      flex items-center justify-center
    
      font-aeonik-pro
       
      ${className}
      ${themeStyles}
      ${sizeStyles}
      ${disabledStyles}
      ${classRoundedStyles}
    `}
    >
      {leftComponent}
      {label}
      {rightComponent}
    </button>
  );
}
