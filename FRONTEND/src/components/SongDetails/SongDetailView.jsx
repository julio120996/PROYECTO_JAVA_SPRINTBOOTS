import { ArrowBack, Pause, PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import SubtitlesDisplay from "../SubtitlesDisplay/SubtitlesDisplay";
import "./songDetailView.css";

const SongDetailView = ({ 
  song, 
  isPlaying, 
  currentTime,
  duration,
  onTogglePlay, 
  onNext, 
  onPrev,
  onClose ,
  subtitlesUrl // Añade esta prop
}) => {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!song) return null;

  
  return (
    <div className="song-detail-view">
      <div className="song-detail-backdrop" style={{ backgroundImage: `url(${song.image})` }}></div>
      
      <div className="song-detail-content">
        <div className="song-detail-header">
          <IconButton 
            onClick={onClose} 
            className="close-button"
            aria-label="Cerrar"
          >
            <ArrowBack fontSize="medium" />
          </IconButton>
        </div>
        
        <div className="song-detail-main">
          <div className="cd-container">
            <div className={`cd ${isPlaying ? 'playing' : ''}`}>
              <img 
                src={song.image} 
                alt={song.title} 
                className="cd-image"
              />
              <div className="cd-center"></div>
              <div className="cd-hole"></div>
              <div className="cd-reflection"></div>
            </div>
          </div>
          
          <div className="song-detail-info">
            <Typography variant="h3" className="song-detail-title">
              {song.title}
            </Typography>
            <Typography variant="subtitle1" className="song-detail-artist">
              {song.artist}
            </Typography>
            
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <div className="progress-dots">
                <span className="active-dot" style={{ left: `${progress}%` }}></span>
              </div>
            </div>
            
            <div className="song-detail-controls">
              <IconButton 
                onClick={onPrev} 
                className="control-button"
                aria-label="Canción anterior"
              >
                <SkipPrevious fontSize="large" />
              </IconButton>
              <IconButton 
                onClick={onTogglePlay} 
                className="play-button"
                aria-label={isPlaying ? "Pausar" : "Reproducir"}
              >
                {isPlaying ? (
                  <Pause fontSize="large" className="play-icon" />
                ) : (
                  <PlayArrow fontSize="large" className="play-icon" />
                )}
              </IconButton>
              <IconButton 
                onClick={onNext} 
                className="control-button"
                aria-label="Siguiente canción"
              >
                <SkipNext fontSize="large" />
              </IconButton>
            </div>

           
           
            <div className="song-detail-subtitles">
    <SubtitlesDisplay
      currentTime={currentTime} // Asegúrate que esto se actualiza correctamente
      subtitlesUrl={song.subtitlesUrl}
    />
  </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetailView;