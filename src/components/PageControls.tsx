import { cn } from "@/utils/cn";

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
    <div
      className={cn(
        "flex disi flex-row gap-[3px]",
        !isVisible && "hidden",
        className
      )}
    >
      {items.map((item, groupIndex) => (
        <div key={groupIndex} className="flex flex-col flex-1 gap-1">
          <p className="uppercase font-bold text-xs text-gray-600">
            {groupIndex + 1}
            {isGroupActive(groupIndex) ? `- ${item.label}` : ""}
          </p>
          <div className="flex flex-row w-full gap-[3px]">
            {Array.from(
              { length: isGroupActive(groupIndex) ? item.length : 1 },
              (_, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className={cn(
                    "flex-1 h-0.5 bg-gray-800",
                    !isItemActive(groupIndex, index) && "opacity-10"
                  )}
                />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
