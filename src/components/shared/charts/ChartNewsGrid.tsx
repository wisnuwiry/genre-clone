import Image from "next/image";

export default function ChartNewsGrid() {
  return (
    <div className="w-full h-full flex flex-col gap-8 px-12">
      <a
        href="https://www.newsweek.com/spotify-genres-befuddle-listeners-1763698"
        className="w-[80]% mr-[20%] z-[100]"
      >
        <Image
          width={300}
          height={300}
          src="/img/news_1.png"
          alt="News"
          className="object-contain w-full h-full shadow-[-12px_12px_0px_-1px_theme(colors.neutral.300)]"
        />
      </a>
      <a
        href="https://www.papermag.com/spotify-wrapped-music-genres-escape-room"
        className="w-[80]% ml-[20%] z-[100]"
      >
        <Image
          width={300}
          height={300}
          src="/img/news_2.png"
          alt="News"
          className="object-contain w-full h-full shadow-[12px_12px_0px_-1px_theme(colors.neutral.300)]"
        />
      </a>

      <div className="flex flex-row gap-16">
        <a
          href="https://www.dailyedge.ie/stomp-and-holler-spotify-3736123-Dec2017/"
          className="flex-1 z-[100]"
        >
          <Image
            width={300}
            height={300}
            src="/img/news_3.png"
            alt="News"
            className="object-contain w-full h-full shadow-[-12px_12px_0px_-1px_theme(colors.neutral.300)]"
          />
        </a>
        <a
          href="https://sea.mashable.com/culture/13522/spotify-wrapped-is-fun-and-all-but-what-even-is-the-adult-standards-genre"
          className="flex-1 z-[100]"
        >
          <Image
            width={300}
            height={300}
            src="/img/news_4.png"
            alt="News"
            className="object-contain w-full h-full shadow-[12px_12px_0px_-1px_theme(colors.neutral.300)]"
          />
        </a>
      </div>
    </div>
  );
}
