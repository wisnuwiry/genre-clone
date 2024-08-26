import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy22() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          <a
            href="https://docs.google.com/spreadsheets/d/1BWHO9TLmCtJIKeC63HuVtjHfwb6iBOAxe-_HBFJ-FHI/edit#gid=1952369265"
            target="_blank"
            className="underline"
          >
            Here
          </a>
          is a historic, publicly-available view of Spotify’s genre dataset,
          which was scraped from
          <a
            href="https://everynoise.com/everynoise1d.cgi?vector=popularity&amp;scope=all"
            target="_blank"
            className="underline"
          >
            Every Noise at Once
          </a>
          .
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
