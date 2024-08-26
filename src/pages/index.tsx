import { AudioPlayerProvider } from "@/components/contexts/useAudioPlayer";
import { DirectionProvider } from "@/components/contexts/useDirection";
import { VideoPlayerProvider } from "@/components/contexts/useVideoPlayer";
import PageScaffold from "@/components/layout/PageScaffold";
import { IBM_Plex_Sans_Condensed, Nanum_Myeongjo } from "next/font/google";

const serifFont = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-serif",
  preload: true,
});

const sansFont = IBM_Plex_Sans_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  preload: true,
});

export default function Home() {
  return (
    <main
      className={`bg-background w-screen h-screen overflow-hidden ${sansFont.variable} ${serifFont.variable}`}
    >
      <DirectionProvider>
        <AudioPlayerProvider>
          <VideoPlayerProvider>
            <PageScaffold />
          </VideoPlayerProvider>
        </AudioPlayerProvider>
      </DirectionProvider>
    </main>
  );
}
