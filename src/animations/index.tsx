import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AnimateFadeIn({
  children,
  animationPosition = "bottomToTop",
  delay,
  ...props
}: {
  delay?: number;
  children: React.JSX.Element;
  animationPosition?: "bottomToTop" | "leftToRight";
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: animationPosition == "leftToRight" ? -100 : 0,
        y: animationPosition == "bottomToTop" ? 100 : 0,
      }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ delay: delay }}
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
}: {
  children: React.ReactNode;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the item comes into view
    threshold: 0, // Define the visibility threshold
  });

  return (
    <div className="inline-block" ref={ref}>
      {inView ? children : null}
    </div>
  );
};
