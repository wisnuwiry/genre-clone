import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import VideoPlayer from "@/components/shared/VideoPlayer";

export default function Taxonomy19() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          The same goes for the Velvet Underground and the Stooges, the
          progenitors of punk, who both preceded the phrase “punk music.”
        </p>
        <p className="my-2">
          In 1969, Rolling Stone
          <a
            href="https://www.rollingstone.com/music/music-album-reviews/the-stooges-180002/"
            target="_blank"
            className="underline"
          >
            reviewed
          </a>
          The Stooges first album, calling it, “rock and roll,” as well as
          “loud,” “high-powered,” and “raw energy.” Imagine the audacity should
          they have characterized it as the precipice of a new genre, “punk
          music.”
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="w-full pt-12">
      <div className="max-w-[80%] m-auto">
          <VideoPlayer
            src="/video/4/4.mp4"
            thumbnail="/video/4/thumb.jpg"
            videoId="video-taxonomy-19"
          />
        </div>
      </div>
    </ContentWrapper>
  );
}
