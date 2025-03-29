import { Add, Close, Favorite, MoreHoriz, Pause, PlayArrow } from "@mui/icons-material";
import { Button, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAlbumDetalles } from "../../hooks/album/useAlbumDetalles";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import SongDetailView from "../SongDetails/SongDetailView";
import "./album.css";

const AlbumPlaylist = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const albumId = searchParams.get("albumId");

  const {
    album: albumInfo,
    canciones: songs,
    loading,
    error,
    obtenerDetallesAlbum
  } = useAlbumDetalles();

  const audioRef = useRef(null);
  const [dominantColor, setDominantColor] = useState("#535353");
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [processedSongs, setProcessedSongs] = useState([]);
  const userPlaylists = ["Favoritos", "Workout", "Relax", "Fiesta"];

  useEffect(() => {
    if (albumId) {
      obtenerDetallesAlbum(albumId);
    }
  }, [albumId]);

  useEffect(() => {
    if (songs.length > 0) {
      const withFixedDurations = songs.map(song => ({
        ...song,
        duracion: song.duracion || Math.floor(Math.random() * (300 - 120 + 1) + 120)
      }));
      setProcessedSongs(withFixedDurations);
    }
  }, [songs]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Error al reproducir:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => handleNext();

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSong]);

  const handleOpenPlaylistModal = (song) => {
    setSelectedSong(song);
    setOpenPlaylistModal(true);
  };

  const handleClosePlaylistModal = () => {
    setOpenPlaylistModal(false);
  };

  const handleAddToPlaylist = (playlist) => {
    console.log(`Añadiendo "${selectedSong.titulo}" a la playlist "${playlist}"`);
    handleClosePlaylistModal();
  };

  useEffect(() => {
    if (albumInfo) {
      const colors = ["#1E3264", "#8D67AB", "#E8115B", "#148A08", "#F037A5"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setDominantColor(randomColor);
    }
  }, [albumInfo]);

  const playSong = (song, index) => {
    setCurrentSongIndex(index);
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const playAllSongs = () => {
    if (processedSongs.length > 0) {
      if (currentSong && isPlaying) {
        setIsPlaying(false);
      } else {
        setCurrentSongIndex(0);
        setCurrentSong(processedSongs[0]);
        setIsPlaying(true);
      }
    }
  };

  const handleNext = () => {
    if (currentSongIndex < processedSongs.length - 1) {
      const nextIndex = currentSongIndex + 1;
      setCurrentSongIndex(nextIndex);
      setCurrentSong(processedSongs[nextIndex]);
      setIsPlaying(true);
    } else {
      setCurrentSongIndex(0);
      setCurrentSong(processedSongs[0]);
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (currentSongIndex > 0) {
      const prevIndex = currentSongIndex - 1;
      setCurrentSongIndex(prevIndex);
      setCurrentSong(processedSongs[prevIndex]);
      setIsPlaying(true);
    } else {
      const lastIndex = processedSongs.length - 1;
      setCurrentSongIndex(lastIndex);
      setCurrentSong(processedSongs[lastIndex]);
      setIsPlaying(true);
    }
  };

  const handleSongDoubleClick = (song, index) => {
    playSong(song, index);
    setShowDetailView(true);
  };

  const closeDetailView = () => {
    setShowDetailView(false);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '--:--';
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (loading) return <Typography className="text-gray-500 text-center">Cargando álbum...</Typography>;
  if (error) return <Typography className="text-red-500 text-center">Error: {error}</Typography>;
  if (!albumInfo) return <Typography className="text-gray-500 text-center">No se encontró el álbum</Typography>;

  return (
    <div className="album-container" style={{ "--album-color": dominantColor }}>
      <audio
        ref={audioRef}
        src={currentSong?.audio}
        onEnded={handleNext}
        hidden
      />

      <div className="album-header">
        <img src={albumInfo.imagen} alt={albumInfo.titulo} className="album-image" />
        <div className="album-info">
          <Typography variant="caption">ÁLBUM</Typography>
          <Typography variant="h1" className="album-title">{albumInfo.titulo}</Typography>
          <Typography className="album-artist">{albumInfo.artista?.nombre}</Typography>
          <Typography className="album-meta">
            {new Date(albumInfo.fecha_lanzamiento).getFullYear()} • {processedSongs.length} canciones
          </Typography>
        </div>
      </div>

      <div className="album-actions">
        <IconButton className="play-button" onClick={playAllSongs}>
          {isPlaying && currentSong ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
        </IconButton>
        <IconButton className="action-button" size="large">
          <Favorite fontSize="large" />
        </IconButton>
        <IconButton className="action-button" size="large">
          <MoreHoriz fontSize="large" />
        </IconButton>
      </div>

      <div className="songs-header">
        <div>#</div>
        <div>TÍTULO</div>
        <div>REPRODUCCIONES</div>
        <div className="song-duration">DURACIÓN</div>
      </div>

      <div className="songs-list">
        {processedSongs.map((song, index) => (
          <div
            key={song.id}
            className={`song-row ${currentSong?.id === song.id ? 'active' : ''}`}
            onClick={() => playSong(song, index)}
            onDoubleClick={() => handleSongDoubleClick(song, index)}
          >
            <div className="song-index">
              <span className="song-index-number">{index + 1}</span>
              <IconButton className="song-play-button" size="small">
                {currentSong?.id === song.id && isPlaying ? <Pause fontSize="small" /> : <PlayArrow fontSize="small" />}
              </IconButton>
            </div>
            <div className="song-info">
              <img src={song.imagen || albumInfo.imagen} alt={song.titulo} className="song-cover" />
              <div>
                <Typography className="song-title">{song.titulo}</Typography>
                <Typography className="song-artist">{albumInfo.artista?.nombre}</Typography>
              </div>
            </div>
            <div>
              {Math.floor(Math.random() * (1000000 - 1000 + 1) + 1000).toLocaleString()}
            </div>
            <div className="song-duration">
              {formatTime(song.duracion)}
            </div>
            <IconButton
              className="add-to-playlist-button"
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenPlaylistModal(song);
              }}
            >
              <Add fontSize="small" />
            </IconButton>
          </div>
        ))}
      </div>

      <div className={`playlist-sidebar ${openPlaylistModal ? 'open' : ''}`}>
        <div className="playlist-sidebar-header">
          <IconButton className="close-button" onClick={handleClosePlaylistModal}>
            <Close />
          </IconButton>
          <Typography variant="h6">Añadir a playlist</Typography>
        </div>

        <div className="playlist-sidebar-content">
          {selectedSong && (
            <div className="selected-song-preview">
              <img src={selectedSong.imagen || albumInfo.imagen} alt={selectedSong.titulo} />
              <div>
                <Typography className="song-title">{selectedSong.titulo}</Typography>
                <Typography className="song-artist">{albumInfo.artista?.nombre}</Typography>
              </div>
            </div>
          )}

          <List className="playlist-list">
            {userPlaylists.map((playlist, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleAddToPlaylist(playlist)}>
                  <ListItemText
                    primary={playlist}
                    secondary={`${Math.floor(Math.random() * 50) + 1} canciones`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button
            fullWidth
            className="create-playlist-button"
            startIcon={<Add />}
          >
            Crear nueva playlist
          </Button>
        </div>
      </div>

      {openPlaylistModal && (
        <div
          className={`playlist-sidebar-overlay ${openPlaylistModal ? 'open' : ''}`}
          onClick={handleClosePlaylistModal}
        />
      )}

      {showDetailView && currentSong && (
        <SongDetailView
          song={currentSong}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={closeDetailView}
          onTimeUpdate={(time) => {
            if (audioRef.current) {
              audioRef.current.currentTime = time;
            }
          }}
          subtitlesUrl={currentSong.subtitlesUrl}
        />
      )}

      {currentSong && (
        <MusicPlayer
          song={{
            ...currentSong,
            image: currentSong.imagen || albumInfo.imagen,
            title: currentSong.titulo,
            artist: albumInfo.artista?.nombre,
            sound: currentSong.audio
          }}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onNext={handleNext}
          onPrev={handlePrev}
          onTimeUpdate={(time) => {
            if (audioRef.current) {
              audioRef.current.currentTime = time;
              setCurrentTime(time);
            }
          }}
        />
      )}
    </div>
  );
};

export default AlbumPlaylist;