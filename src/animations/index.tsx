import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AnimateFadeIn({
  children,
  animationPosition = "bottomToTop",
  delay,
  duration,
  ...props
}: {
  delay?: number;
  duration?: number;
  children: React.JSX.Element;
  animationPosition?: "bottomToTop" | "leftToRight" | "rightToLeft";
}) {
  return <div>{children}</div>;
}

export function AnimateWhileInView({
  children,
}: {
  children: React.JSX.Element;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "just" }}
    >
      {/* Your content here */}
      {children}
    </motion.div>
  );
}

export const RenderWhenInView = ({
  children,
  className,
  triggerOnce = true,
}: {
  children: React.ReactNode;
  className?: string;
  triggerOnce?: boolean;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce, // Only trigger once when the item comes into view
    threshold: 0, // Define the visibility threshold
  });

  return (
    <div className={`inline-block ${className}`} ref={ref}>
      {inView ? children : null}
    </div>
  );
};
