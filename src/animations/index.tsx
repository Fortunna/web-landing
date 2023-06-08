import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AnimateFadeIn({
  children,
  ...props
}: {
  children: React.JSX.Element;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
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
