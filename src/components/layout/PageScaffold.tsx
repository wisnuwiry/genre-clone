import { useCallback, useEffect, useState } from "react";
import PageControls from "./PageControls";
import TapPageArea from "./TapPageArea";

export default function PageScaffold() {
  // Datum
  const controlItems = [
    {
      label: "Intro",
      length: 5,
    },
    {
      label: "Genres",
      length: 8,
    },
    {
      label: "Taxonomy",
      length: 24,
    },
  ];

  // States
  const [activeIndex, setActiveIndex] = useState(0);

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
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const nextPage = () => {
    const totalLength = controlItems.reduce(
      (acc, item) => acc + item.length,
      0
    );

    setActiveIndex((prevIndex) =>
      prevIndex < totalLength - 1 ? prevIndex + 1 : prevIndex
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <PageControls
        items={controlItems}
        activeIndex={activeIndex}
        minimumVisibleIndex={3}
        className="absolute top-2 left-4 right-4"
      />
      <TapPageArea onClickPrev={backPage} onClickNext={nextPage} />
    </div>
  );
}
