import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import MountainGenres from "@/components/shared/svg/MountainGenres";
import { motion } from "framer-motion";

export default function Taxonomy15() {
  const mountainVariants = {
    enter: {
      top: 800,
      opacity: 0.6,
      height: "95vh",
    },
    center: {
      top: 300,
      opacity: 1,
      height: "95vh",
    },
    exit: {
      top: 300,
      opacity: 1,
      height: "95vh",
    },
  };

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          All of the pushback against genre classifications are valid, whether
          that’s inventing escape room and stomp &amp; holler or what qualifies
          as r&amp;b vs. pop.
        </p>
        <p className="my-2">
          But I still think an always-updating catalog of 6,000 genres is
          groundbreaking.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="w-full pt-12">
        <motion.div
          variants={mountainVariants}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="absolute left-0 right-0 min-w-[1200px]"
        >
          <MountainGenres />
        </motion.div>
      </div>
    </ContentWrapper>
  );
}
