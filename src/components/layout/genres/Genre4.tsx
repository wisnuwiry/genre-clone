import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import ChartLineRankedStream from "@/components/shared/charts/ChartLineRankedStream";
import { rankedByStreamData } from "@/data/chart/ranked_by_stream";

export default function Genre4() {
  const data = [
    {
      genre: "K-Pop",
      color: "#5b4ae4",
      items: rankedByStreamData.map((e) => ({
        date: new Date(e.date),
        rank: e["k-pop"],
      })),
    },
  ];

  const xLabels = {
    2017: "2017",
    2020: "2020",
    2023: "2023",
  };

  const yLabels = {
    1: "#1",
    50: "#50",
    100: "#100",
    150: "#150",
    200: "#200",
    250: "#250",
    300: "#300",
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
        <div className="w-full px-[10%]">
          <div className="m-auto">
            <ChartLineRankedStream
              data={data}
              minRank={0}
              maxRank={300}
              xLabels={xLabels}
              yLabels={yLabels}
            />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
