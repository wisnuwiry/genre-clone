import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";

export default function Taxonomy7() {
  return (
    <ContentWrapper className="flex flex-col">
      {/* Header */}
      <ContentHeader>
        <p className="my-2">
          Some of these genres might seem made-up by Spotify; that’s because a
          few are. Glenn McDonald, who leads much of Spotify’s genre research,
          elaborated in an{" "}
          <a
            href="https://open.spotify.com/episode/2qXXNqMVWQZ89QTtRWEXrj?si=09376bda34884085&nd=1"
            target="_blank"
            className="underline"
          >
            Interview
          </a>{" "}
          that genres can come from users’ listening patterns.
        </p>
        <p className="my-2">
          Here are the latest genres added in 2023 (note: some have always
          existed, but were just recently added to Spotify’s dataset).
        </p>
      </ContentHeader>

      {/* Content */}
      <div className="w-full pt-12">
        <p className="font-sans text-3xl">
          <strong>
            “We do recognize the existence of genres that are mainly driven by
            listening patterns and not necessarily by the artists thinking of
            themselves as being peers... we can find clusters of listeners who
            share fondness for the same artists, even when it’s not necessarily
            obvious that those artists share a style, and they don’t necessarily
            come from the same place. But we can see that, yes, fans of these
            artists tend to be fans of the others.”
          </strong>
        </p>
      </div>
    </ContentWrapper>
  );
}
