import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy5() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          Hip hop has evolved so much over the past 50 years; today it’s a
          kaleidoscope of varied sounds and communities. Spotify has hundreds of
          genres that overlap with hip hop, and many were added in the past few
          years.
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
