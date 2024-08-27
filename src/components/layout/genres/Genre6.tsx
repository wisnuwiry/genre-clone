import AudioButton from "@/components/shared/AudioButton";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import ChartLineRankedStream from "@/components/shared/charts/ChartLineRankedStream";
import { rankedByStreamData } from "@/data/chart/ranked_by_stream";

export default function Genre6() {
  const data = [
    {
      genre: "K-Pop",
      color: "#c5c5dc",
      animate: false,
      items: rankedByStreamData.map((e) => ({
        date: new Date(e.date),
        rank: e["k-pop"],
      })),
    },
    {
      genre: "r&b",
      color: "#878787",
      animate: false,
      items: rankedByStreamData.map((e) => ({
        date: new Date(e.date),
        rank: e["r&b"],
      })),
    },
    {
      genre: "edm",
      color: "#878787",
      animate: false,
      items: rankedByStreamData.map((e) => ({
        date: new Date(e.date),
        rank: e.edm,
      })),
    },
    {
      genre: "reggeation",
      color: "#5b4ae4",
      animate: true,
      items: rankedByStreamData.map((e) => ({
        date: new Date(e.date),
        rank: e.reggaeton,
      })),
    },
  ];

  const xLabels = {
    2017: "2017",
    2020: "2020",
    2022: "2022",
  };

  const yLabels = {
    1: "#1",
    25: "#25",
    50: "#50",
    75: "#75",
  };

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <div className="my-4">
          You’ve probably heard of{" "}
          <AudioButton
            src="/audio/bad-bunny.mp3"
            audioId="bad-bunny"
            title="Bad Bunny"
            className="px-2 py-1"
          />
          , the world’s most streamed musician, three years running.{" "}
          <strong>Reggeation</strong>
          {"  has similarly exhibited a  "}
          <strong>K-POP</strong>
          -like ascent.
        </div>
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
              maxRank={75}
              xLabels={xLabels}
              yLabels={yLabels}
            />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
