import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

interface AudioPlayerContextProps {
  play: (audioId: string, audioSrc: string) => void;
  pause: () => void;
  stop: () => void;
  resume: () => void;
  currentAudioId: string | null;
  isPlaying: boolean;
  percentagePlayed: number;
}

const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(
  undefined
);

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error(
      "useAudioPlayer must be used within an AudioPlayerProvider"
    );
  }
  return context;
};

interface AudioPlayerProviderProps {
  children: React.ReactNode;
}

export const AudioPlayerProvider: React.FC<AudioPlayerProviderProps> = ({
  children,
}) => {
    const [currentAudioId, setCurrentAudioId] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audioSrc, setAudioSrc] = useState<string | null>(null);
    const [percentagePlayed, setPercentagePlayed] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
  
    const play = (audioId: string, audioSrc: string) => {
      setCurrentAudioId(audioId);
      setAudioSrc(audioSrc);
      setIsPlaying(true);
      setIsPaused(false);
    };
  
    const pause = () => {
      setIsPlaying(false);
      setIsPaused(true);
    };
  
    const resume = () => {
      if (isPaused) {
        setIsPlaying(true);
        setIsPaused(false);
      }
    };
  
    const stop = () => {
      setIsPlaying(false);
      setCurrentAudioId(null);
      setAudioSrc(null);
      setPercentagePlayed(0);
      setIsPaused(false);
    };
  
    useEffect(() => {
      if (!audioRef.current || !audioSrc) return;
  
      const audioElement = audioRef.current;
      audioElement.src = audioSrc;
  
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
  
      const handleTimeUpdate = () => {
        if (audioElement.duration > 0) {
          const percent = (audioElement.currentTime / audioElement.duration) * 100;
          setPercentagePlayed(percent);
        }
      };
  
      const handleEnded = () => {
        setIsPlaying(false);
        setPercentagePlayed(0);
      };
  
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('ended', handleEnded);
  
      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        audioElement.removeEventListener('ended', handleEnded);
      };
    }, [isPlaying, audioSrc]);

  return (
    <AudioPlayerContext.Provider
      value={{ play, pause, stop, resume, currentAudioId, isPlaying, percentagePlayed }}
    >
      <audio ref={audioRef} />
      {children}
    </AudioPlayerContext.Provider>
  );
};
