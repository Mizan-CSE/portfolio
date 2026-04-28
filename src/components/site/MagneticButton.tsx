import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { AnchorHTMLAttributes, forwardRef, MouseEvent, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  children: ReactNode;
  strength?: number;
  ariaLabel?: string;
};

export const MagneticButton = forwardRef<HTMLAnchorElement, Props>(
  ({ className = "", children, strength = 14, ariaLabel, ...anchorProps }, ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 15 });
    const sy = useSpring(y, { stiffness: 200, damping: 15 });
    const rx = useTransform(sy, (v) => v * -0.4);
    const ry = useTransform(sx, (v) => v * 0.4);

    const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width - 0.5) * strength * 2;
      const py = ((e.clientY - rect.top) / rect.height - 0.5) * strength * 2;
      x.set(px);
      y.set(py);
    };

    const reset = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.a
        ref={ref}
        {...anchorProps}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        aria-label={ariaLabel}
        style={{ x: sx, y: sy, rotateX: rx, rotateY: ry, transformPerspective: 600 }}
        className={className}
      >
        {children}
      </motion.a>
    );
  }
);

MagneticButton.displayName = "MagneticButton";
