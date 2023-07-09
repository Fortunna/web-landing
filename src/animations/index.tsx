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
  return (
    <motion.div
      initial={{
        opacity: 0,
        x:
          animationPosition == "leftToRight"
            ? -100
            : animationPosition == "rightToLeft"
            ? 100
            : 0,
        y: animationPosition == "bottomToTop" ? 100 : 0,
      }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ delay: delay, duration: duration ?? 0.5 }}
      {...props}
    >
      {/* Your content here */}
      {children}
    </motion.div>
  );
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
