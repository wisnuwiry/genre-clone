import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy9() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          This goes for older music too. Rock music is so diffuse that it makes
          sense to retroactively further catalog it. This includes, for example,{" "}
          <strong>mellow gold</strong>(
          <a
            target="_blank"
            className="underline"
            href="https://newsroom.spotify.com/2022-11-30/learn-about-those-music-genres-you-may-not-have-heard-of"
          >
            which has
          </a>
          “elements of soft rock and folk rock, with emphasis on clean
          production, harmonies, and melodic compositions”).
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="w-full pt-12">
        <div className="max-w-[80%] m-auto">
          <LatinCombinedBubble />
        </div>
      </div>
    </ContentWrapper>
  );
}
