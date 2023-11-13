import classNames from "classnames";
import React from "react";

type componentProps = {
  children: React.JSX.Element;
  className?: string;
  x2: boolean;
};
export default function PageWrapper({
  children,
  className,
  x2 = false,
}: componentProps) {
  const styles = classNames({
    "lg:px-[20%]": x2,
    "lg:px-[15%]": !x2,
  });
  return (
    <div className={`${styles} max-w-full w-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
