import { useDirection } from "@/components/contexts/useDirection";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import MountainGenres from "@/components/shared/svg/MountainGenres";
import { motion } from "framer-motion";

export default function Genre7() {
  const { direction } = useDirection();

  const mountainVariants = {
    enter: (direction: number) => ({
      top: direction < 0 ? 300: "200%",
      opacity: direction < 0 ? 1 : 0.6,
      height: direction < 0 ? "95vh" : "400vh",
    }),
    center: {
      top: 300,
      opacity: 1,
      height: "400vh",
    },
    exit: {
      top: 300,
      opacity: 1,
      height: "400vh",
    },
  };

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-4">
          But is reggaeton seemingly pervasive because we are finally counting
          popularity on a global stage? Is K-pops ascent driven by Spotify
          finally tapping into the taste of music fans in more countries?
        </p>
        <p className="my-4">
          Popularity is such a self-fulfilling loop: we obsess over whxats
          popular (especially in the US), pushing top-charting artists further
          into the cultural spotlight.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="mt-12">
        <motion.div
          variants={mountainVariants}
          custom={direction}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="absolute left-0 right-0 min-w-[1200px]"
        >
          <MountainGenres />
        </motion.div>
      </div>
    </ContentWrapper>
  );
}
