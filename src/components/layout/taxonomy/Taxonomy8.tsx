import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy8() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          An example of a genre that’s driven by “listening patterns” includes
          escape room, Spotify’s 260th most streamed genre. McDonald
          <a
            href="https://web.archive.org/web/20190617084744/https://festivalpeak.com/what-is-escape-room-and-why-is-it-one-of-my-top-genres-on-spotify-a886372f003f"
            target="_blank"
            className="underline"
          >
            describe it
          </a>{" "}
          as, “The vibe is kind of an
          underground-trap/PC-music/indietronic/activist-hip-hop kind of thing.“
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
