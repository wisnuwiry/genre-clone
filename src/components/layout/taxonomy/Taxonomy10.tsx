import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import Image from "next/image";

export default function Taxonomy10() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          I’ve seen pushback to these genres, especially the ones that only
          exist in Spotify’s data. They often show up on the “top genres” list
          for users’ year-end report.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="w-full pt-12">
        <div className="max-w-[80%] m-auto z-50">
          <Image src="/img/news_1.svg" alt="News" />
        </div>
      </div>
    </ContentWrapper>
  );
}
