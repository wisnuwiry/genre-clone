import { cn } from "@/utils/cn";
import { useAudioPlayer } from "../contexts/useAudioPlayer";

interface Props {
  title: string;
  src: string;
  audioId: string;
  className?: string;
}

export default function AudioButton({ title, src, audioId, className }: Props) {
  const {
    play,
    pause,
    stop,
    resume,
    isPlaying,
    currentAudioId,
    percentagePlayed,
  } = useAudioPlayer();

  const isCurrentAudio = audioId === currentAudioId;

  const playerControl = () => {
    if (isPlaying && isCurrentAudio) {
      pause();
    } else {
      if (isCurrentAudio && percentagePlayed < 100) {
        resume();
      } else {
        stop();
        play(audioId, src);
      }
    }
  };

  return (
    <div className="w-fit inline z-20 group">
      <button
        className={cn("pointer-events-auto inline relative px-4 py-2.5 bg-[#EFEFEF] font-sans rounded-xl overflow-hidden", className)}
        onClick={playerControl}
      >
        <div
          className="progress absolute top-0 left-0 right-0 h-full bg-[#b3ff00] group-hover:bg-[#77aa00] rounded-xl"
          style={{
            width: `${100 - (isCurrentAudio ? percentagePlayed : 0)}%`,
          }}
        ></div>
        <p className="relative font-bold">{title} 🎵 </p>
      </button>
    </div>
  );
}
