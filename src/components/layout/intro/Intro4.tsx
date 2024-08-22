import { useDirection } from "@/components/contexts/useDirection";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import Table from "@/components/shared/Table";
import {
  genreNotTop25SevenYearsAgo,
  rankedGenresIn2016,
  rankedGenresIn2023,
} from "@/data/genres";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export default function Intro4() {
  const { direction } = useDirection();

  const tableVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 0 : 120,
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
        <p className="font-serif text-lg text-lg">
          I’ve highlighted the genres that were{" "}
          <strong className="font-sans text-violet-800 bg-violet-50">
            not in the top 25
          </strong>{" "}
          seven years ago. Why did so many genres shift in popularity?
        </p>
      </ContentHeader>

      {/* Content */}
      <motion.div
        className="mt-5"
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
            },
            {
              key: "2023",
              header: "2023",
              builder: (value, _) => {
                return (
                  <span
                    className={cn(
                      "w-fit",
                      genreNotTop25SevenYearsAgo.includes(value) &&
                        "text-violet-800 bg-violet-50"
                    )}
                  >
                    {value}
                  </span>
                );
              },
            },
          ]}
          rows={rows}
        />
      </motion.div>
    </ContentWrapper>
  );
}
