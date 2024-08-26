import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import { allGenres } from "@/data/genres";

export default function Taxonomy4() {
  return (
    <ContentWrapper className="flex flex-col h-[calc(100vh-3rem)]">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          So Spotify’s genre catalog not only recognizes the breadth of music
          within hip hop and other genres, but identifies new styles as well.
        </p>
        <p className="my-2">
          Here are the latest genres added in 2023 (note: some have always
          existed, but were just recently added to Spotify’s dataset).
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="w-full mt-12 flex-1 overflow-y-scroll z-50">
        <div className="grid grid-cols-3 gap-2">
          {allGenres.map((genre, index) => (
            <p className="grid-cols-1 font-sans font-medium" key={index}>
              {genre}
            </p>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}
