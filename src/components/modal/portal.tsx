import { useRef, useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

type ComponentProps = {
  selector: string;
  children: React.ReactNode;
};
export default function Portal({ children, selector }: ComponentProps) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  const handleMount = useCallback(() => {
    if (selector) {
      ref.current = document.querySelector(selector);
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    !mounted && handleMount();
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
