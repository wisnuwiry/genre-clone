import { useDirection } from "@/components/contexts/useDirection";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import Table from "@/components/shared/Table";
import { rankedGenresIn2016 } from "@/data/genres";
import { motion } from "framer-motion";

export default function Intro2() {
  const { direction } = useDirection();

  const tableVariants = {
    enter: (direction: number) => ({
      y: direction < 0 ? 0 : 120,
    }),
    center: {
      y: 0,
    },
    exit: {
      y: 0,
    },
  };

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="font-serif text-lg text-lg">
          In 2016, Spotify began publishing a list of the most popular music
          genres on its platform.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="flex flex-row pt-12">
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
              },
            ]}
            rows={rankedGenresIn2016.map((item) => ({ "2016": item }))}
          />
        </motion.div>

        <div className="flex-1"></div>
      </div>
    </ContentWrapper>
  );
}
