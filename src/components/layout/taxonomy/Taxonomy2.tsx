import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy2() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          Before it was removed, Latin seemed like a vestige of the record store
          days, a potpourri of anything Spanish-language, from Juan Gabriel to
          Bad Bunny.
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
