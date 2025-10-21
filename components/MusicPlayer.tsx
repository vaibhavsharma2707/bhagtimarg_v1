// src/components/MusicPlayer.tsx
import React, { useRef, useState, useEffect } from "react";

interface MusicProps {
  src: string;
  title: string;
  artist?: string;
}

const MusicPlayer: React.FC<MusicProps> = ({ src, title, artist }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1); // volume: 0 to 1

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const vol = parseFloat(e.target.value);
    audio.volume = vol;
    setVolume(vol);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="font-semibold truncate">{title}</h3>
          {artist && <p className="text-sm text-gray-400 truncate">{artist}</p>}
        </div>
        <button
          onClick={togglePlay}
          className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-700 rounded mb-2">
        <div
          className="h-2 bg-green-500 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">Volume:</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
          className="w-full"
        />
      </div>

      <audio ref={audioRef} src={src} />
    </div>
  );
};

export default MusicPlayer;
