import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  items: ControlGroup[];
  activeIndex: number;
  minimumVisibleIndex?: number;
  className?: string;
}

interface ControlGroup {
  label: string;
  length: number;
}

export default function PageControls({
  items,
  activeIndex,
  minimumVisibleIndex,
  className,
}: Props) {
  const isVisible = minimumVisibleIndex
    ? activeIndex >= minimumVisibleIndex
    : true;

  const getGroupRange = (groupIndex: number) => {
    const startIndex = items
      .slice(0, groupIndex)
      .reduce((sum, group) => sum + group.length, 0);
    const endIndex = startIndex + items[groupIndex].length - 1;
    return { startIndex, endIndex };
  };

  const isGroupActive = (groupIndex: number) => {
    const { startIndex, endIndex } = getGroupRange(groupIndex);
    return activeIndex >= startIndex && activeIndex <= endIndex;
  };

  const isItemActive = (groupIndex: number, index: number) => {
    const { startIndex } = getGroupRange(groupIndex);
    return activeIndex === startIndex + index;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn("flex disi flex-row gap-[6px]", className)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {items.map((item, groupIndex) => (
            <motion.div
              key={groupIndex}
              className={cn(
                "flex flex-col gap-1",
                isGroupActive(groupIndex) ? "flex-[5]" : "flex-1"
              )}
              initial={{ opacity: 0.5 }}
              animate={{
                opacity: isGroupActive(groupIndex) ? 1 : 0.7,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className={cn(
                  "font-sans uppercase font-bold text-xs",
                  isGroupActive(groupIndex) ? "text-gray-600" : "text-gray-400"
                )}
              >
                {groupIndex + 1}
                {isGroupActive(groupIndex) ? `— ${item.label}` : ""}
              </motion.p>
              <motion.div className="flex flex-row w-full gap-[3px]">
                {Array.from(
                  { length: isGroupActive(groupIndex) ? item.length : 1 },
                  (_, index) => (
                    <motion.div
                      key={`${item.label}-${index}`}
                      className="flex-1 h-0.5 bg-gray-800"
                      initial={{ scaleX: 0.7, opacity: 0 }}
                      animate={{
                        scaleX: 1,
                        opacity: isItemActive(groupIndex, index) ? 1 : 0.2,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  )
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
