// MusicPlayer.js
import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./musicPlayer.css";

const MusicPlayer = ({ song, isPlaying, onTogglePlay, onNext, onPrev }) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play().catch(error => {
          console.error("Error al reproducir:", error);
        });
      } else {
        audio.pause();
      }

      const updateProgress = () => {
        if (audio.duration) {
          const progressPercentage = (audio.currentTime / audio.duration) * 100;
          setProgress(progressPercentage);
          setCurrentTime(formatTime(audio.currentTime));
        }
      };

      const setAudioData = () => {
        setDuration(formatTime(audio.duration));
      };

      const handleEnded = () => {
        onNext();
      };

      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("loadedmetadata", setAudioData);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("loadedmetadata", setAudioData);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [isPlaying, song, onNext]);

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (audio.duration) {
      const newTime = (e.target.value / 100) * audio.duration;
      audio.currentTime = newTime;
      setProgress(e.target.value);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!song) return null;

  return (
    <div className="music-player">
      <div className="player-info">
        <img src={song.image} alt={song.title} />
        <div>
          <Typography variant="body1" fontWeight="bold">
            {song.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {song.artist}
          </Typography>
        </div>
      </div>

      <div className="player-controls">
        <div className="controls-container">
          <div className="progress-container">
            <span className="time">{currentTime}</span>
            <input 
              type="range" 
              className="progress-bar" 
              value={progress} 
              onChange={handleSeek}
              min="0"
              max="100"
              step="0.1"
            />
            <span className="time">{duration}</span>
          </div>
          <div className="navigation-buttons">
            <IconButton onClick={onPrev} color="secondary" size="small" className="control-button">
              <SkipPrevious fontSize="small" />
            </IconButton>
            <IconButton onClick={onTogglePlay} color="primary" size="small" className="play-button">
              {isPlaying ? <Pause fontSize="small" /> : <PlayArrow fontSize="small" />}
            </IconButton>
            <IconButton onClick={onNext} color="secondary" size="small" className="control-button">
              <SkipNext fontSize="small" />
            </IconButton>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={song.sound} />
    </div>
  );
};

export default MusicPlayer;