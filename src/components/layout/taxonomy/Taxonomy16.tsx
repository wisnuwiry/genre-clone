import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy16() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2 text-xl">
          I see this effort in the same way I see taxonomy: technically
          accurate, colloquially useless.
        </p>
        <p className="my-2">
          For centuries we had generic names to identify animals, such as
          “fish.” Everything from squid to crabs (and obviously jellyfish) were
          lumped into the same “fish” bucket.
        </p>
        For centuries we had generic names to identify animals, such as “fish.”
        Everything from squid to crabs (and obviously jellyfish) were lumped
        into the same “fish” bucket.
        <p className="my-2">
          For centuries we had generic names to identify animals, such as
          “fish.” Everything from squid to crabs (and obviously jellyfish) were
          lumped into the same “fish” bucket.
        </p>
        <p className="my-2">
          But on closer inspection, most of these animals were not related at
          all. In a research context, scientists have drawn boundaries between
          animals that we mindlessly lumped together.
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
