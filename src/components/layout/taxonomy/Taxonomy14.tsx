import CompactTable from "@/components/shared/CompactTable";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy14() {
  const data = [
    ["2005-present", "R&B/Hip Hop"],
    ["1990-2005", "R&B Song and Tracks"],
    ["1969-82", "Black Singles"],
    ["1965-63", "Rythm and Blues Singles"],
    ["1946-49", "Race Records"],
    ["1942-46", "The Harlem Hit Parade"],
  ];

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          Tyler has a point. Billboard’s “Hot R&amp;B/Hip-Hop Songs” chart was
          once named “Hot Black Singles” and even “Race Records,” all stemming
          from a 75-year effort to racially divide music charts.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="w-full pt-12">
        <CompactTable
          rows={data}
          title="How the name of Billboard's Hot R&B Chart has evolved"
        />
        <p className="font-sans pt-4">
          Source: <i>Categorizing Sound</i> by David Brackett
        </p>
      </div>
    </ContentWrapper>
  );
}
