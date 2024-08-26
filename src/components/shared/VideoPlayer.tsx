import { useEffect, useRef } from "react";
import { useVideoPlayer } from "../contexts/useVideoPlayer";
import VolumeIcon from "./svg/VolumeIcon";
import VolumeOffIcon from "./svg/VolumeOffIcon";
import { motion } from "framer-motion";

interface Props {
  src: string;
  videoId: string;
  thumbnail: string;
}

export default function VideoPlayer({ src, videoId, thumbnail }: Props) {
  const {
    play,
    pause,
    stop,
    resume,
    isPlaying,
    isMuted,
    currentVideoId,
    percentagePlayed,
    toggleMute,
    registerVideoRef,
  } = useVideoPlayer();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    registerVideoRef(videoId, videoRef);
  }, [videoId, registerVideoRef]);

  const isCurrentVideo = videoId === currentVideoId;

  const playerControl = () => {
    if (isPlaying && isCurrentVideo) {
      pause();
    } else {
      if (isCurrentVideo && percentagePlayed < 100) {
        resume();
      } else {
        stop();
        play(videoId, src);
      }
    }
  };

  return (
    <div className="relative max-w-[500px] z-50">
      <video className="w-full" 
      poster={thumbnail}
      ref={videoRef} onClick={playerControl} />
      <button
        className="speaker-control absolute top-8 left-8 p-3 rounded-xl bg-[#b3ff00]"
        onClick={toggleMute}
      >
        {isMuted ? <VolumeOffIcon /> : <VolumeIcon />}
      </button>
      <div className="absolute top-0 left-0 right-0">
        <motion.div
          className="h-2 bg-[#b3ff00]"
          style={{
            width: `${percentagePlayed}%`,
          }}
        ></motion.div>
      </div>
    </div>
  );
}
