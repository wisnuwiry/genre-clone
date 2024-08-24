import { useAudioPlayer } from "../contexts/useAudioPlayer";

interface Props {
  title: string;
  src: string;
  audioId: string;
}

export default function AudioButton({ title, src, audioId }: Props) {
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
    <div className="w-fit inline z-20">
      <button
        className="pointer-events-auto inline relative px-2 py-1 bg-[#EFEFEF] font-sans rounded-xl"
        onClick={playerControl}
      >
        <div
          className="progress absolute top-0 left-0 right-0 h-full bg-[#b3ff00] rounded-xl"
          style={{
            width: `${100 - (isCurrentAudio ? percentagePlayed : 0)}%`,
          }}
        ></div>
        <p className="relative">{title} 🎵 </p>
      </button>
    </div>
  );
}
