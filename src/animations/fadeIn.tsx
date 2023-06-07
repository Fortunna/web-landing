import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimateFadeIn({
  children,
}: {
  children: React.JSX.Element;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      {/* Your content here */}
      {children}
    </motion.div>
  );
}
