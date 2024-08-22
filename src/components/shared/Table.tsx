import { cn } from "@/utils/cn";

interface Column {
  key: string;
  header: string;
  builder?: (value: any, row: Record<string, any>) => React.ReactNode;
}

interface Props {
  columns: Column[];
  rows: Record<string, any>[];
  title?: string;
  className?: string;
}

export default function Table({ columns, rows, title,className }: Props) {
  return (
    <table className={cn("w-full font-sans", className)}>
      {title && <caption className="text-start font-bold">{title}</caption>}
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className="border-b border-b-2 border-black text-gray-500 text-left font-medium pt-4 pl-2"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b border-b-gray-300">
            {columns.map((col, colIndex) => (
              <td key={col.key} className="text-md font-medium text-gray-800">
                {colIndex === 0 && <span className="text-xs text-gray-500 pr-1">{rowIndex + 1} </span>}
                {col.builder ? col.builder(row[col.key], row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
