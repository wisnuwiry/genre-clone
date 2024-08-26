import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import ChartLineRankedStream from "@/components/shared/charts/ChartLineRankedStream";
import { rankedByStreamData } from "@/data/chart/ranked_by_stream";
import { motion } from "framer-motion";

export default function Genre5() {
  const data = [
    {
      genre: "K-Pop",
      color: "#5b4ae4",
      items: rankedByStreamData.map((e) => ({
        date: new Date(e.date),
        rank: e["k-pop"],
      })),
    },
    {
      genre: "r&b",
      color: "#878787",
      items: rankedByStreamData.map((e) => ({
        date: new Date(e.date),
        rank: e["r&b"],
      })),
    },
    {
      genre: "edm",
      color: "#878787",
      items: rankedByStreamData.map((e) => ({
        date: new Date(e.date),
        rank: e.edm,
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
    25: "#25",
    50: "#50",
    75: "#75",
  };

  const emojiOpacityVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
  };
  
  const emojiPositionVariants = {
    enter: {
      y: 0,
    },
    center: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-4">
          <span className="font-sans text-fuchsia-700 font-medium">K-Pop</span>{" "}
          now has more streams than{" "}
          <span className="font-sans font-semibold text-gray-800">r&b</span>
          {" and "}
          <span className="font-sans font-semibold text-gray-800">edm</span>
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="mt-12">
        <p className="text-start font-bold font-sans pb-8">
          Genres, ranked by streams on Spotify and highlighting artists country
          of origin
        </p>
        <div className="w-full px-[10%]">
          <div className="m-auto relative">
            <ChartLineRankedStream
              data={data}
              minRank={0}
              maxRank={75}
              xLabels={xLabels}
              yLabels={yLabels}
            />
            <motion.div
              className="absolute top-0 right-8 text-8xl rotate-12"
              variants={emojiOpacityVariants}
              transition={{ duration: 1, ease: "easeInOut", delay: 2.1 }}
            >
              <motion.p
                variants={emojiPositionVariants}
                transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
              >
                🤯
              </motion.p>
            </motion.div>
            <motion.div
              className="absolute top-28 left-12 text-8xl rotate-12"
              variants={emojiOpacityVariants}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            >
              <motion.p
                variants={emojiPositionVariants}
                transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
              >
                🤯
              </motion.p>
            </motion.div>
            <motion.div
              className="absolute top-[50%] right-[30%] text-8xl -rotate-12"
              variants={emojiOpacityVariants}
              transition={{ duration: 1, ease: "easeInOut", delay: 2.2 }}
            >
              <motion.p
                variants={emojiPositionVariants}
                transition={{ duration: 2, ease: "easeInOut", delay: 3 }}
              >
                🤯
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
