import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ContentWrapper({ children, className }: Props) {
  return (
    <div className="w-full">
      <div className={cn("max-w-[720px] m-auto p-4", className)}>{children}</div>
    </div>
  );
}
