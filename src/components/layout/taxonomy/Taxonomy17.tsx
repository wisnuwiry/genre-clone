import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy17() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          Similarly, the genre database adds much needed detail to broad
          categories, like hip hop and rock. For musicologists, it’s an
          anthropological gold mine. And for Spotify, it likely helps them
          better profile their users’ music tastes.{" "}
        </p>
        <p className="my-2">
          For centuries we had generic names to identify animals, such as
          “fish.” Everything from squid to crabs (and obviously jellyfish) were
          lumped into the same “fish” bucket.
        </p>
        <p className="my-2">
          But these genres don’t necessarily work in casual conversation: you
          can describe your music taste as indie, even if, technically, Spotify
          says it’s escape room. The same goes for biology: people should call
          figs a fruit, even though it’s technically an inverted flower. Honey
          Badgers will always be badgers to me, even though they are more
          related to weasels.
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
