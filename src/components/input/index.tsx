import classNames from "classnames";
import React, { HTMLInputTypeAttribute } from "react";

type componentProps = {
  theme?: "default";
  id: string;
  rounded?: boolean;
  rightComponent?: React.ReactElement;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  value?: string;
};
export default function TextInput({
  placeholder,
  rounded,
  rightComponent,
  type,
  id,
  className,
  value,
  theme = "default",
}: componentProps) {
  const bgStyles = classNames({
    "bg-transparent-deep text-light-white border-transparent-1":
      theme == "default",
  });

  const roundedStyles = classNames({
    "rounded-full": rounded,
    rounded: !rounded,
  });
  return (
    <div className="relative">
      <input
        value={value ?? ""}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${bgStyles} ${roundedStyles} ${className}   px-[16px] py-[8px] text-caption-2   h-[40px] border-[1px]`}
      />
      {rightComponent ? (
        <div className="absolute  top-0 right-0 h-full">{rightComponent}</div>
      ) : null}
    </div>
  );
}
