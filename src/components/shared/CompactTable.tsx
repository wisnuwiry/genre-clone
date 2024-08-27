import { cn } from "@/utils/cn";

interface Props {
  rows: string[][];
  title?: string;
  className?: string;
}

export default function CompactTable({ rows, title, className }: Props) {
  return (
    <table className={cn("w-full font-sans", className)}>
      {title && <caption className="text-start font-bold pb-4">{title}</caption>}

      <tbody className="border-t border-t-gray-500">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b border-dashed border-b-gray-300">
            {row.map((cell, cellIndex) => (
              <td
                key={`${rowIndex}-${cellIndex}`}
                className={cn(
                  "text-md text-gray-800",
                  cellIndex === 0 ? "font-bold" : "font-medium"
                )}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
