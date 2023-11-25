import classNames from "classnames";
import React from "react";

type componentProps = {
  children: React.JSX.Element;
  className?: string;
  x2?: boolean;
};
export default function PageWrapper({
  children,
  className,
  x2 = false,
}: componentProps) {
  const styles = classNames({
    "lg:px-[20%]": x2,
    "lg:px-[10%] px-5": !x2,
  });
  return (
    <div
      className={`${styles} l w-full overflow-hidden max-w-[1700px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
