import { useCallback, useEffect, useState } from "react";
import PageControls from "./PageControls";
import TapPageArea from "./TapPageArea";
import { contentViews, controlGroupItems } from "@/data/ui_data";
import { motion } from "framer-motion";
import { useDirection } from "../contexts/useDirection";
import { useAudioPlayer } from "../contexts/useAudioPlayer";
import { useVideoPlayer } from "../contexts/useVideoPlayer";

export default function PageScaffold() {
  // States
  const [activeIndex, setActiveIndex] = useState(0);
  const { direction, setDirection } = useDirection();
  const { stop: stopAudio } = useAudioPlayer();
  const { stop: stopVideo } = useVideoPlayer();

  // Callbacks
  const handleKeyDown = useCallback((event: any) => {
    if (event.key === "ArrowRight") {
      nextPage();
    } else if (event.key === "ArrowLeft") {
      backPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Functions
  const backPage = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    stopAudio();
    stopVideo();
  };

  const nextPage = () => {
    setDirection(1);
    const totalLength = controlGroupItems.reduce(
      (acc, item) => acc + item.length,
      0
    );

    setActiveIndex((prevIndex) =>
      prevIndex < totalLength - 1 ? prevIndex + 1 : prevIndex
    );
    stop();
  };

  const getCurrentView = () => {
    const view = contentViews?.at(activeIndex);

    return view !== undefined ? view!() : <h1>Belum redi</h1>;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      {/* Control & page state */}
      <PageControls
        items={controlGroupItems}
        activeIndex={activeIndex}
        minimumVisibleIndex={3}
        className="absolute top-2 left-4 right-4"
      />

      {/* Tab Content */}
      <motion.div
        key={activeIndex}
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        whileHover="center"
        className="pt-12"
      >
        {getCurrentView()}
      </motion.div>

      {/* Click/Tap are */}
      <TapPageArea
        onClickPrev={backPage}
        onClickNext={nextPage}
        className="absolute top-16"
      />
    </div>
  );
}
