import LatinCombinedBubble from "@/components/shared/bubbles/LatinCombinedBubble";
import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy23() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2 text-center">
          This essay is by{" "}
          <a
            href="https://pudding.cool/author/matt-daniels/"
            target="_blank"
            className="underline"
          >
            Matt Daniels
          </a>{" "}
          with{" "}
          <a
            href="https://pudding.cool/author/michelle-mcghee/"
            target="_blank"
            className="underline"
          >
            Michelle McGhee
          </a>
          .
        </p>
        <p className="my-2 text-center">
          Subscribe to{" "}
          <a
            href="https://thepuddingmail.substack.com"
            target="_blank"
            className="underline"
          >
            The Pudding’s newsletter
          </a>
          . Consider supporting us on{" "}
          <a
            href="https://www.patreon.com/thepudding"
            target="_blank"
            className="underline"
          >
            Patreon
          </a>{" "}
          too.
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
