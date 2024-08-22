import { cn } from "@/utils/cn";

interface Props {
  onClickPrev: () => void;
  onClickNext: () => void;
  className?: string;
}

export default function TapPageArea({
  onClickPrev,
  onClickNext,
  className,
}: Props) {
  return (
    <section className={cn("w-screen h-screen flex flex-row", className)}>
      <button className="w-[33%] h-full outline-none" onClick={onClickPrev} />
      <button className="w-[67%] h-full outline-none" onClick={onClickNext} />
    </section>
  );
}
