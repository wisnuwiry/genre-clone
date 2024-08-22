import ContentWrapper from "@/components/shared/ContentWrapper";
import ChartByRegion from "@/components/shared/charts/ChartByRegion";
import ChartRankedCountries from "@/components/shared/charts/ChartRankedCountries";

export default function Genre3() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <article className="font-serif text-lg text-lg">
        <p className="my-4">
          Every year, Spotify is available in more countries, such as India in
          2019 and South Korea in 2021. Fittingly, you can see genres with
          artists{" "}
          <span className="font-sans text-fuchsia-700 font-medium">
            primarily from countries in Latin America, Asia, and Africa
          </span>{" "}
          begin to dominate in popularity.
        </p>
      </article>

      {/* Content */}
      <div className="mt-12">
        <p className="text-start font-bold font-sans pb-8">
          Genres, ranked by streams on Spotify and highlighting artists country of origin
        </p>
        <ChartRankedCountries />
      </div>
    </ContentWrapper>
  );
}
