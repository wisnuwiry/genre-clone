import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import ChartLineRankedStream from "@/components/shared/charts/ChartLineRankedStream";

export default function Genre6() {
  const data = [
    {
      genre: "Pop",
      color: "#5b4ae4",
      items: [
        { year: 2018, rank: 2},
        { year: 2019, rank: 5},
        { year: 2020, rank: 8},
        { year: 2021, rank: 23},
        { year: 2022, rank: 2},
      ],
    },
    {
      genre: "r&b",
      color: "#5b4ae4",
      items: [
        { year: 2018, rank: 4},
        { year: 2019, rank: 5},
        { year: 2020, rank: 4},
        { year: 2021, rank: 3},
        { year: 2022, rank: 5},
      ],
    },
    {
      genre: "edm",
      color: "#5b4ae4",
      items: [
        { year: 2018, rank: 6},
        { year: 2019, rank: 4},
        { year: 2020, rank: 7},
        { year: 2021, rank: 2},
        { year: 2022, rank: 4},
      ],
    },
    {
      genre: "reggeation",
      color: "#5b4ae4",
      items: [
        { year: 2018, rank: 1},
        { year: 2019, rank: 4},
        { year: 2020, rank: 2},
        { year: 2021, rank: 2},
        { year: 2022, rank: 3},
      ],
    },
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
          You’ve probably heard of{" "}
          <span className="font-sans text-fuchsia-700 font-medium">Bad Bunny (TODO: music)</span>{" "}
          , the world’s most streamed musician, three years running. {" "}
          <strong>Reggeation</strong>{"  has similarly exhibited a  "}
          <strong>K-POP</strong>
          -like ascent.
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
