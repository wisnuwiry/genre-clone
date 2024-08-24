import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import ChartByRegion from "@/components/shared/charts/ChartByRegion";

export default function Genre2() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-4">This shouldn’t be surprising.</p>
        <p className="my-4">
          Today, Spotify users from North America and Europe represent a much
          smaller share of streams than in 2016.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="mt-12 px-20">
      <p className="text-start font-bold font-sans pb-8">Spotify Streams, by Region</p>
        <ChartByRegion />
      </div>
    </ContentWrapper>
  );
}
