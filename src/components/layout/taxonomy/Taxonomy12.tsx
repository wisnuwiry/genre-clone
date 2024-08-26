import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy12() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          Artists, especially, seem to struggle when their music is associated
          with new genres.
        </p>
        <p className="my-2">
          Consider yacht rock: coined in the late ’00s, it describes the
          feel-good ’80s grooves of bands like the Eagles, Doobie Brothers, and
          Daryl Hall & John Oates.
        </p>
        <div className="my-2">
          Yacht rock is the 154th most-streamed genre on Spotify, even though
          John Oates (the “Oates” of Hall & Oates) had{" "}
          <a href="https://www.youtube.com/watch?v=ZiyCMKMOVAc" target="_blank" className="underline">
            never heard of the term
          </a>
          .
        </div>
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
