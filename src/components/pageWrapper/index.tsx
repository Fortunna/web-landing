import React from "react";

type componentProps = {
  children: React.JSX.Element;
};
export default function PageWrapper({ children }: componentProps) {
  return <div className="px-8">{children}</div>;
}
