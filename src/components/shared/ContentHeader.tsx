import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ContentHeader({ children, className }: Props) {
  return (
    <motion.article
      className={cn(
        "font-serif text-lg font-semibold bg-gradient-to-b from-background/50 to-background z-10",
        className
      )}
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0.7 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.article>
  );
}
