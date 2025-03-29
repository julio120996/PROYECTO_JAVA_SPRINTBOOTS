import { Delete, Favorite, MoreHoriz, Pause, PlayArrow } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MusicPlayer from "../../MusicPlayer/MusicPlayer";
import SongDetailView from "../../SongDetails/SongDetailView";
import "./../album.css";

const PlayList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const playlistName = searchParams.get('playlistName') || 'Mi Playlist';
  const [creationDate] = useState(new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));

  // Datos de ejemplo para la playlist
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
      duration: "5:55",
      plays: "1,234,567,890",
      image: "https://i.scdn.co/image/ab67616d00001e02b10f306798f7b8da6c7f9e6d",
      sound: "sound1.mp3"
    },
    {
      id: 2,
      title: "Imagine",
      artist: "John Lennon",
      album: "Imagine",
      duration: "3:04",
      plays: "987,654,321",
      image: "https://i.scdn.co/image/ab67616d00001e02c08d5fa5c0f1a834acef5100",
      sound: "sound2.mp3"
    },
    {
      id: 3,
      title: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      duration: "4:54",
      plays: "876,543,210",
      image: "https://i.scdn.co/image/ab67616d00001e02e220f8cdd1c15f1f3b3f3b5a",
      sound: "sound3.mp3"
    }
  ]);

  const [dominantColor, setDominantColor] = useState("#535353");
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);

  // Menú de opciones
  const handleMenuOpen = (event, song) => {
    setAnchorEl(event.currentTarget);
    setSelectedSong(song);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteSong = () => {
    if (selectedSong) {
      setSongs(songs.filter(song => song.id !== selectedSong.id));
      handleMenuClose();
    }
  };

  useEffect(() => {
    const colors = ["#1E3264", "#8D67AB", "#E8115B", "#148A08", "#F037A5"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setDominantColor(randomColor);
  }, [playlistName]);

  // Funciones de reproducción (se mantienen igual)
  const playSong = (song, index) => {
    setCurrentSongIndex(index);
    if (currentSong?.sound === song.sound) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const playAllSongs = () => {
    if (songs.length > 0) {
      if (currentSong && isPlaying) {
        setIsPlaying(false);
      } else {
        setCurrentSongIndex(0);
        setCurrentSong(songs[0]);
        setIsPlaying(true);
      }
    }
  };

  const handleNext = () => {
    if (currentSongIndex < songs.length - 1) {
      const nextIndex = currentSongIndex + 1;
      setCurrentSongIndex(nextIndex);
      setCurrentSong(songs[nextIndex]);
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (currentSongIndex > 0) {
      const prevIndex = currentSongIndex - 1;
      setCurrentSongIndex(prevIndex);
      setCurrentSong(songs[prevIndex]);
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

  return (
    <div className="album-container" style={{ "--album-color": dominantColor }}>
      <div className="album-header">
        <div className="album-image" style={{ 
          background: dominantColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '80px'
        }}>
          {playlistName.split(' ').map(word => word[0]).join('').toUpperCase()}
        </div>
        <div className="album-info">
          <Typography variant="caption">PLAYLIST</Typography>
          <Typography variant="h1" className="album-title">{playlistName}</Typography>
          <Typography className="album-meta">
            Creada el {creationDate} • {songs.length} canciones
          </Typography>
        </div>
      </div>

      <div className="album-actions">
        <IconButton className="play-button" onClick={playAllSongs}>
          <PlayArrow fontSize="large" />
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
        <div>ÁLBUM</div>
        <div className="song-duration">DURACIÓN</div>
        <div></div> {/* Espacio para el botón de eliminar */}
      </div>

      <div className="songs-list">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={`song-row ${currentSong?.sound === song.sound ? 'active' : ''}`}
            onClick={() => playSong(song, index)}
            onDoubleClick={() => handleSongDoubleClick(song, index)}
          >
            <div className="song-index">
              <span className="song-index-number">{index + 1}</span>
              <IconButton className="song-play-button" size="small">
                {currentSong?.sound === song.sound && isPlaying ? <Pause fontSize="small" /> : <PlayArrow fontSize="small" />}
              </IconButton>
            </div>
            <div className="song-info">
              <img src={song.image} alt={song.title} className="song-cover" />
              <div>
                <Typography className="song-title">{song.title}</Typography>
                <Typography className="song-artist">{song.artist}</Typography>
              </div>
            </div>
            <div className="song-album">{song.album}</div>
            <div className="song-duration">{song.duration}</div>
            <IconButton 
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                handleMenuOpen(e, song);
              }}
            >
              <MoreHoriz fontSize="small" />
            </IconButton>
          </div>
        ))}
      </div>

      {/* Menú de opciones */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDeleteSong}>
          <Delete fontSize="small" style={{ marginRight: 8 }} />
          Eliminar de la playlist
        </MenuItem>
      </Menu>

      {showDetailView && (
        <SongDetailView
          song={currentSong}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={closeDetailView}
        />
      )}

      <MusicPlayer
        song={currentSong}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default PlayList;