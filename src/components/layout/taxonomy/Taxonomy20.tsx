import AudioButton from "@/components/shared/AudioButton";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import { sampleMusicFromOctober2023 } from "@/data/taxonomy";

export default function Taxonomy20() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        There are over 100,000 songs published to Spotify daily. To classify
        this music is to examine the petri dish of music culture-one that is
        mutating and evolving in mere months-and attempt to sort it.
      </ContentHeader>

      {/* Content */}
      <div className="w-full pt-12">
        <p className="text-start font-bold pb-8 font-sans">
          A sample of the New Music from October 2023
        </p>

        <div className="flex flex-row flex-wrap gap-2 font-sans">
          {sampleMusicFromOctober2023.map((item, index) => (
            <div className="flex flex-col gap-0.5" key={index}>
              <span className="px-2 font-sans text-sm font-medium">
                {item.genre}
              </span>
              <AudioButton
                audioId={item.id}
                src={item.src}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
}
