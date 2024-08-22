import { useDirection } from "@/components/contexts/useDirection";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import Table from "@/components/shared/Table";
import { rankedGenresIn2016, rankedGenresIn2023 } from "@/data/genres";
import { motion } from "framer-motion";

export default function Intro3() {
  const rows = rankedGenresIn2016.map((value, index) => ({
    "2016": value,
    "2023": rankedGenresIn2023[index],
  }));

  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="font-serif text-lg text-lg">
          Here`s the list again, seven years later in 2023.
        </p>
      </ContentHeader>

      {/* Content */}
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
          },
        ]}
        rows={rows}
        className="mt-12"
      />
    </ContentWrapper>
  );
}
