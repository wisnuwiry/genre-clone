import ContentHeader from "@/components/shared/ContentHeader";
import ContentWrapper from "@/components/shared/ContentWrapper";
import OpenLinkIcon from "@/components/shared/svg/OpenLinkIcon";
import Image from "next/image";

export default function Taxonomy21() {
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
          </a>{" "}
          is a historic, publicly-available view of Spotify’s genre dataset,
          which was scraped from{" "}
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
        <div className="max-h-[95vh]">
          <div className="w-full h-full relative">
            <Image
              src="/img/explore.jpg"
              width={600}
              height={1200}
              className="w-full h-full object-contain"
              alt="Google Sheet Data"
            />
            <div className="absolute bottom-8 w-full flex flex-row items-center">
              <a
                href="https://docs.google.com/spreadsheets/d/1BWHO9TLmCtJIKeC63HuVtjHfwb6iBOAxe-_HBFJ-FHI/edit?usp=sharing"
                target="_blank"
                className="flex flex-row gap-3 bg-violet-500 rounded-full px-12 py-2 font-sans text-lg font-medium text-white z-50 m-auto"
              >
                Go to Google Sheet
                <span>
                  <OpenLinkIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
