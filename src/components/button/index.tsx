import classNames from "classnames";
import React from "react";

type componentProps = {
  outline?: boolean;
  theme?: "white" | "secondary" | "secondary-solid" | "dark";
  label: string;
  rightComponent?: React.JSX.Element;
  wrapperClass?: string;
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
  wrapperClass,
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
    "bg-black text-white": theme == "dark" && !outline,
  });

  const sizeStyles = classNames({
    "  py-[8px] px-[12px]   md:text-[14px] text-[12px]": size == "default",
    "  md:py-[16px] py-[8px] px-[60px] px-[30px] md:text-[15px] text-[12px]":
      size == "big",
  });

  const disabledStyles = classNames({
    "opacity-[0.6]": disabled,
  });

  const wrapperStyles = classNames({
    "p-[1px] bg-button-gradient": theme == "dark" && !outline,
  });

  return (
    <div
      className={`${wrapperStyles} ${wrapperClass} ${classRoundedStyles} overflow-hidden  inline-block`}
    >
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
    </div>
  );
}
