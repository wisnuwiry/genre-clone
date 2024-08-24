import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import ChartByRegion from "@/components/shared/charts/ChartByRegion";
import ChartLineRankedStream from "@/components/shared/charts/ChartLineRankedStream";
import ChartRankedCountries from "@/components/shared/charts/ChartRankedCountries";

export default function Genre4() {
  const data = [
    [
      { year: 2018, rank: 2, genre: "Pop" },
      { year: 2019, rank: 5, genre: "Pop" },
      { year: 2020, rank: 8, genre: "Pop" },
      { year: 2021, rank: 23, genre: "Pop" },
      { year: 2022, rank: 2, genre: "Pop" },
    ],
    [
      { year: 2018, rank: 4, genre: "Rock" },
      { year: 2019, rank: 5, genre: "Rock" },
      { year: 2020, rank: 4, genre: "Rock" },
      { year: 2021, rank: 3, genre: "Rock" },
      { year: 2022, rank: 2, genre: "Rock" },
    ],
  ];

  const xLabels = {
    2018: "2018",
    2020: "2020",
    2022: "2022",
  };

  const yLabels = {
    1: "#Top 1",
    3: "#Top 3",
    6: "#Top 6",
    10: "#Top 10",
  };

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-4">
          Every year, Spotify is available in more countries, such as India in
          2019 and South Korea in 2021. Fittingly, you can see genres with
          artists{" "}
          <span className="font-sans text-fuchsia-700 font-medium">
            primarily from countries in Latin America, Asia, and Africa
          </span>{" "}
          begin to dominate in popularity.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="mt-12">
        <p className="text-start font-bold font-sans pb-8">
          Genres, ranked by streams on Spotify and highlighting artists country
          of origin
        </p>
        <div className="w-full">
          <ChartLineRankedStream
            data={data}
            minRank={0}
            maxRank={6}
            xLabels={xLabels}
            yLabels={yLabels}
          />
        </div>
      </div>
    </ContentWrapper>
  );
}
