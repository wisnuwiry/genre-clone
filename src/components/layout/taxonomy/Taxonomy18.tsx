import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy18() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2 text-xl">
          This approach means we can catalog music scenes that culture is
          typically too slow to name.
        </p>
        <p className="my-2">
          Hip hop officially celebrates its 50th anniversary this year, so 1973
          marks its birth, the year that DJ Kool Herc mixed three breakbeats
          together. But it wasn’t until the late ’70s that “hip hop” was
          actually coined.
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
