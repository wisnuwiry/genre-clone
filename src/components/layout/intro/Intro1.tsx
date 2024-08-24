import { useDirection } from "@/components/contexts/useDirection";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import KeyboardInstruction from "@/components/shared/KeyboardInstruction";
import Table from "@/components/shared/Table";
import { rankedGenresIn2016 } from "@/data/genres";
import { motion } from "framer-motion";

export default function Intro1() {
  const { direction } = useDirection();

  const tableVariants = {
    enter: (direction: number) => ({
      y: direction < 0 ? -120 : 0,
    }),
    center: (direction: number) => ({
      y: 0,
      transition: {
        duration: direction < 0 ? 1.5 : 0.8,
      },
    }),
    exit: {
      y: 0,
    },
  };

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <h3 className="text-md">
          <a
            href="https://pudding.cool/"
            target="_blank"
            className="underline underline-offset-2 font-semibold"
          >
            The Pudding
          </a>
          <span className="text-gray-600"> presents</span>
        </h3>
        <h1 className="font-serif text-5xl my-4 font-semibold">
          You should look at this chart about{" "}
          <span className="text-violet-800">music genres</span>.
        </h1>
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
          <div className="absolute bottom-0 w-full h-3/6 bg-gradient-to-b from-background/25 to-background"></div>
        </motion.div>

        <div className="flex-1">
          <KeyboardInstruction className="absolute bottom-8 ml-16" />
        </div>
      </div>
    </ContentWrapper>
  );
}
