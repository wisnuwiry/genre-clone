import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy13() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
        Artists rarely have control over how their music is categorized. Lil Nas X’s “Old Town Road” stirred controversy when it wasn’t initially classified as a country song by Billboard.
        </p>
        <p className="my-2">
        In a <a href="https://www.youtube.com/watch?v=yGirTQYZqCc" target="_blank" className="underline">post-award speech</a>
        , Tyler, the Creator pushed back at his Grammy nomination for Best Rap Album. 
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
