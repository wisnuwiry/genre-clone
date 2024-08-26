import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy11() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          I get it. Spotify’s <strong>stomp and holler</strong> genre is{" "}
          <a
            target="_blank"
            href="https://www.furia.com/page.cgi?type=log&amp;id=427"
            className="underline"
          >
            described
          </a>{" "}
          by McDonald to include “those rousing neo-rustic folk/pop-ish artists,
          like Mumford & Sons and the Lumineers, that kind of sound like Dave
          Matthews ran over a jug band.”
        </p>
        <p className="my-2">
          But I will never be caught dead saying, “I listen to stomp and
          holler.”
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
