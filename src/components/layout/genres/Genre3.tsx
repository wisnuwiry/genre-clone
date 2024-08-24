import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import ChartRankedCountries from "@/components/shared/charts/ChartRankedCountries";

export default function Genre3() {

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-4">
          So many non-English genres have ascended in popularity:
          <strong className="font-sans text-violet-800">K-pop</strong> is, by
          far, the biggest gainer since 2016. Over the past 7 years, it grew to
          the 17th most-streamed genre.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="mt-12">
        <p className="text-start font-bold font-sans pb-8">
          Genres, ranked by streams on Spotify.
        </p>
        <ChartRankedCountries />
      </div>
    </ContentWrapper>
  );
}
