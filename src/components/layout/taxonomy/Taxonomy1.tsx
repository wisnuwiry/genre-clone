import ChartLatin from "@/components/shared/charts/ChartLatin";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy1() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">This effort is continually elvolving.</p>
        <p className="my-2">
          For example,{" "}
          <strong className="font-sans text-violet-800">latin</strong> reigned
          as a top 10 genre until it was dropped from Spotify’s genre
          classification entirely in late 2022.
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="w-full px-24 pt-12">
        <div className="m-auto">
          <ChartLatin />
        </div>
      </div>
    </ContentWrapper>
  );
}
