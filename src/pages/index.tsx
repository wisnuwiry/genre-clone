import PageScaffold from "@/components/layout/PageScaffold";
import { IBM_Plex_Sans_Condensed, Nanum_Myeongjo } from "next/font/google";

const serifFont = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sansFont = IBM_Plex_Sans_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Home() {
  return (
    <main className={`bg-background w-screen h-screen ${sansFont.className} ${serifFont.className}`}>
      <PageScaffold/>
    </main>
  );
}
