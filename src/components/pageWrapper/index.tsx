import React from "react";

type componentProps = {
  children: React.JSX.Element;
};
export default function PageWrapper({ children }: componentProps) {
  return (
    <div className="lg:px-8 md:px-5 px-3 max-w-full overflow-hidden">
      {children}
    </div>
  );
}
