import classNames from 'classnames';
import React from 'react';

type componentProps = {
  children: React.JSX.Element;
  className?: string;
  x2?: boolean;
  isOverflowHiden?: boolean;
};
export default function PageWrapper({
  children,
  className,
  x2 = false,
  isOverflowHiden,
}: componentProps) {
  const styles = classNames({
    'lg:px-[20%]': x2,
    'lg:px-[15%] px-5 ': !x2,
  });
  return (
    <div
      className={`${styles} w-full ${
        isOverflowHiden ? '' : 'overflow-hidden'
      } max-w-[1400px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
