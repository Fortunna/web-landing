import React from "react";

type componentProps = {
  children: React.JSX.Element;
  className?: string;
};
export default function PageWrapper({ children, className }: componentProps) {
  return (
    <div
      className={`lg:px-[8%] md:px-5 px-3 max-w-full overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
