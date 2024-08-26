import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  MutableRefObject,
} from "react";

interface VideoPlayerContextProps {
  play: (videoId: string, videoSrc: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  toggleMute: () => void;
  registerVideoRef: (
    videoId: string,
    ref: MutableRefObject<HTMLVideoElement | null>
  ) => void;
  currentVideoId: string | null;
  isPlaying: boolean;
  isMuted: boolean;
  percentagePlayed: number;
}

const VideoPlayerContext = createContext<VideoPlayerContextProps | undefined>(
  undefined
);

export const useVideoPlayer = () => {
  const context = useContext(VideoPlayerContext);
  if (!context) {
    throw new Error("useVideoPlayer must be used within a VideoPlayerProvider");
  }
  return context;
};

interface VideoPlayerProviderProps {
  children: React.ReactNode;
}

export const VideoPlayerProvider: React.FC<VideoPlayerProviderProps> = ({
  children,
}) => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [percentagePlayed, setPercentagePlayed] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRefs = useRef<{
    [key: string]: MutableRefObject<HTMLVideoElement | null>;
  }>({});

  const play = (videoId: string, videoSrc: string) => {
    if (currentVideoId && videoRefs.current[currentVideoId]?.current) {
      videoRefs.current[currentVideoId]?.current?.pause();
    }

    setCurrentVideoId(videoId);
    setVideoSrc(videoSrc);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const pause = () => {
    setIsPlaying(false);
    setIsPaused(true);
  };

  const resume = () => {
    if (
      isPaused &&
      currentVideoId &&
      videoRefs.current[currentVideoId]?.current
    ) {
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const stop = () => {
    if (currentVideoId && videoRefs.current[currentVideoId]?.current) {
      videoRefs.current[currentVideoId]?.current.pause();
      videoRefs.current[currentVideoId].current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentVideoId(null);
    setVideoSrc(null);
    setPercentagePlayed(0);
    setIsPaused(false);
  };

  const registerVideoRef = (
    videoId: string,
    ref: MutableRefObject<HTMLVideoElement | null>
  ) => {
    videoRefs.current[videoId] = ref;
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
  };

  useEffect(() => {
    if (
      !currentVideoId ||
      !videoRefs.current[currentVideoId]?.current ||
      !videoSrc
    )
      return;

    const videoElement = videoRefs.current[currentVideoId]?.current;
    videoElement.src = videoSrc;
    videoElement.muted = isMuted;

    if (isPlaying) {
      videoElement.play();
    } else {
      videoElement.pause();
    }

    const handleTimeUpdate = () => {
      if (videoElement.duration > 0) {
        const percent =
          (videoElement.currentTime / videoElement.duration) * 100;
        setPercentagePlayed(percent);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setPercentagePlayed(100);
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("ended", handleEnded);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("ended", handleEnded);
    };
  }, [isPlaying, currentVideoId, videoSrc, isMuted]);

  return (
    <VideoPlayerContext.Provider
      value={{
        play,
        pause,
        resume,
        stop,
        toggleMute,
        registerVideoRef,
        currentVideoId,
        isPlaying,
        percentagePlayed,
        isMuted,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};
