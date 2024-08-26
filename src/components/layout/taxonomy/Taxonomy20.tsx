import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy20() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          It’s hard to see how special something is, right in the moment.
        </p>
        <p className="my-2">
          If you’re old enough, you can look at the music scenes of your youth
          with awe, realizing that the pop music wasn’t just pop, but a marker
          of the era.
        </p>
        <p className="my-2">
          Right now, there’s some benign song that will, one day, represent a
          sound that’s quintessentially of the year 2023, and it will probably
          have a name.
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
