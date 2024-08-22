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

export default function Intro5() {
  const { direction } = useDirection();

  const tableVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? -90 : -65,
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
          This led me down the rabbit hole of exploring the full list of
          Spotify’s genre database.
        </p>
        <p className="my-4">
          This database has over 6,000 genres, and it’s changed the way that I
          think about music. But before we explore why Spotify is tracking so
          many genres, let’s start with the preceding question
        </p>
      </ContentHeader>

      {/* Content */}
      <motion.div
        className="mt-12"
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
