import { useDirection } from "@/components/contexts/useDirection";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import MountainGenres from "@/components/shared/svg/MountainGenres";
import { motion } from "framer-motion";

export default function Genre8() {
  const { direction } = useDirection();

  const mountainVariants = {
    enter: (direction: number) => ({
      top: direction > 0 ? 300 : "200%",
      height: direction > 0 ? "calc(100vh-300px)" : "400vh",
    }),
    center: {
      top: 300,
      height: "calc(100vh-300px)",
    },
    exit: {
      top: 300,
      height: "calc(100vh-300px)",
    },
  };

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-4">
          Next, we are going to look at what beyond the top 25. Music nerds,
          this section is for you.
        </p>
        <p className="my-4 text-xl">
          Below the top 25 ranking are genres #26 to #6,000 (and counting), all
          part of an on-going effort to catalog every music community.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="mt-12">
        <motion.div
          variants={mountainVariants}
          custom={direction}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="absolute left-0 right-0 min-w-[1200px]"
        >
          <MountainGenres />
        </motion.div>
      </div>
    </ContentWrapper>
  );
}
