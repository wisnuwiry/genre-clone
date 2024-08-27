import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import Image from "next/image";

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
      </ContentHeader>

      {/* Content */}
      <div className="w-full pt-12">
        <div className="max-w-[80%] max-h-[] m-auto">
          <Image
            src="/img/fish.jpg"
            width={500}
            height={800}
            alt="Fish"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </ContentWrapper>
  );
}
