import { useDirection } from "@/components/contexts/useDirection";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import Table from "@/components/shared/Table";
import {
  genrePerformedInSpanishKoreanAndHindi,
  rankedGenresIn2016,
  rankedGenresIn2023,
} from "@/data/genres";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export default function Genre1() {
  const { direction } = useDirection();

  const tableVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 90 : 0,
    }),
    center: {
      y: 0,
    },
    exit: {
      y: 0,
    },
  };

  const rows = rankedGenresIn2016.map((value, index) => ({
    "2016": value,
    "2023": rankedGenresIn2023[index],
  }));

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-4">
          First, note how many of 2023’s top genres are generally performed in
          <strong className="font-sans text-fuchsia-700 bg-fuchsia-50">
            {" "}
            Spanish, Korean, or Hindi.
          </strong>
        </p>
      </ContentHeader>

      {/* Content */}
      <motion.div
        className="flex-1 relative"
        variants={tableVariants}
        custom={direction}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <Table
          title="Genres, ranked by streams on Spotify"
          columns={[
            {
              key: "2016",
              header: "2016",
              builder: (value, _) => {
                return (
                  <span
                    className={cn(
                      "w-fit text-[#5e2404]",
                      genrePerformedInSpanishKoreanAndHindi.includes(value) &&
                        "text-fuchsia-700 bg-fuchsia-50"
                    )}
                  >
                    {value}
                  </span>
                );
              },
            },
            {
              key: "2023",
              header: "2023",
              builder: (value, _) => {
                return (
                  <span
                    className={cn(
                      "w-fit text-[#5e2404]",
                      genrePerformedInSpanishKoreanAndHindi.includes(value) &&
                        "text-fuchsia-700 bg-fuchsia-50"
                    )}
                  >
                    {value}
                  </span>
                );
              },
            },
          ]}
          rows={rows}
          className="mt-12"
        />
      </motion.div>
    </ContentWrapper>
  );
}
