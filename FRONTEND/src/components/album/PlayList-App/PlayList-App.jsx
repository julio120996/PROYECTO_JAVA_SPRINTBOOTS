import { Delete, Favorite, MoreHoriz, Pause, PlayArrow } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEliminarCancionPlaylist } from "../../../hooks/playList/useEliminarCancionPlaylist.js";
import { usePlaylistDetalles } from "../../../hooks/playList/usePlaylistDetalles.js";
import { AuthContext } from "../../../hooks/user/AuthContext";
import MusicPlayer from "../../MusicPlayer/MusicPlayer";
import SongDetailView from "../../SongDetails/SongDetailView";
import "./../album.css";

const PlayList = () => {
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get('playlistId');
  const { usuario } = useContext(AuthContext);
  
  const { 
    playlistDetalles, 
    loading, 
    error,
    obtenerPlaylistDetalles 
  } = usePlaylistDetalles();

  const { 
    eliminarCancionPlaylist, 
    loading: loadingEliminar, 
    error: errorEliminar 
  } = useEliminarCancionPlaylist();

  const [dominantColor, setDominantColor] = useState("#535353");
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    if (playlistId && usuario?.id_usuario) {
      obtenerPlaylistDetalles(usuario.id_usuario, playlistId);
    }
  }, [playlistId, usuario?.id_usuario]);

  useEffect(() => {
    if (playlistDetalles?.nombre) {
      const colors = ["#1E3264", "#8D67AB", "#E8115B", "#148A08", "#F037A5"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setDominantColor(randomColor);
    }
  }, [playlistDetalles?.nombre]);

  const handleMenuOpen = (event, song) => {
    setAnchorEl(event.currentTarget);
    setSelectedSong(song);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteSong = async () => {
  if (!selectedSong || !playlistId || !usuario?.id_usuario) {
    handleMenuClose();
    return;
  }

  try {
    const success = await eliminarCancionPlaylist(playlistId, selectedSong.id_cancion);
    
    if (success) {
      // 1. Actualización optimista inmediata
      const nuevasCanciones = playlistDetalles.canciones.filter(
        c => c.id_cancion !== selectedSong.id_cancion
      );
      
      // 2. Actualizar el estado local primero
      setPlaylistDetalles(prev => ({
        ...prev,
        canciones: nuevasCanciones
      }));

      // 3. Forzar actualización del contador de canciones
      setPlaylistDetalles(prev => ({
        ...prev,
        canciones: [...nuevasCanciones] // Crear nueva referencia
      }));

      // 4. Si la canción eliminada era la actual
      if (currentSong?.id_cancion === selectedSong.id_cancion) {
        setIsPlaying(false);
        setCurrentSong(null);
        setCurrentSongIndex(0);
      }

      // 5. Recargar datos del servidor para asegurar consistencia
      setTimeout(async () => {
        await obtenerPlaylistDetalles(usuario.id_usuario, playlistId);
      }, 300);
    }
  } catch (error) {
    console.error("Error al eliminar canción:", error);
    // Mostrar notificación de error al usuario si es necesario
  } finally {
    handleMenuClose();
  }
};

  const playSong = (song, index) => {
    setCurrentSongIndex(index);
    if (currentSong?.id_cancion === song.id_cancion) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const playAllSongs = () => {
    if (playlistDetalles?.canciones?.length > 0) {
      if (currentSong && isPlaying) {
        setIsPlaying(false);
      } else {
        setCurrentSongIndex(0);
        setCurrentSong(playlistDetalles.canciones[0]);
        setIsPlaying(true);
      }
    }
  };

  const handleNext = () => {
    if (currentSongIndex < playlistDetalles?.canciones?.length - 1) {
      const nextIndex = currentSongIndex + 1;
      setCurrentSongIndex(nextIndex);
      setCurrentSong(playlistDetalles.canciones[nextIndex]);
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (currentSongIndex > 0) {
      const prevIndex = currentSongIndex - 1;
      setCurrentSongIndex(prevIndex);
      setCurrentSong(playlistDetalles.canciones[prevIndex]);
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

  if (loading) return <div className="loading">Cargando playlist...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!playlistDetalles) return <div className="error">No se encontró la playlist</div>;

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
          {playlistDetalles.nombre.split(' ').map(word => word[0]).join('').toUpperCase()}
        </div>
        <div className="album-info">
          <Typography variant="caption">PLAYLIST</Typography>
          <Typography variant="h1" className="album-title">{playlistDetalles.nombre}</Typography>
          <Typography className="album-meta">
            Creada el {new Date(playlistDetalles.fecha_creacion).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} • {playlistDetalles.canciones.length} canciones • Creada por {playlistDetalles.usuario.nombre}
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
        <div></div>
      </div>

      <div className="songs-list">
        {playlistDetalles.canciones.map((song, index) => (
          <div
            key={song.id_cancion}
            className={`song-row ${currentSong?.id_cancion === song.id_cancion ? 'active' : ''}`}
            onClick={() => playSong(song, index)}
            onDoubleClick={() => handleSongDoubleClick(song, index)}
          >
            <div className="song-index">
              <span className="song-index-number">{index + 1}</span>
              <IconButton className="song-play-button" size="small">
                {currentSong?.id_cancion === song.id_cancion && isPlaying ? <Pause fontSize="small" /> : <PlayArrow fontSize="small" />}
              </IconButton>
            </div>
            <div className="song-info">
              <img src={song.album.imagen || 'https://via.placeholder.com/50'} alt={song.titulo} className="song-cover" />
              <div>
                <Typography className="song-title">{song.titulo}</Typography>
                <Typography className="song-artist">{song.artista.nombre}</Typography>
              </div>
            </div>
            <div className="song-album">{song.album.titulo}</div>
            <div className="song-duration">
              {song.duration || '3:45'}
            </div>
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

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem 
          onClick={handleDeleteSong}
          disabled={loadingEliminar}
        >
          {loadingEliminar ? (
            "Eliminando..."
          ) : (
            <>
              <Delete fontSize="small" style={{ marginRight: 8 }} />
              Eliminar de la playlist
            </>
          )}
        </MenuItem>
      </Menu>

      {showDetailView && currentSong && (
        <SongDetailView
          song={{
            ...currentSong,
            title: currentSong.titulo,
            artist: currentSong.artista.nombre,
            album: currentSong.album.titulo,
            image: currentSong.album.imagen
          }}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={closeDetailView}
        />
      )}

      {currentSong && (
        <MusicPlayer
          song={{
            id: currentSong.id_cancion,
            title: currentSong.titulo,
            artist: currentSong.artista.nombre,
            album: currentSong.album.titulo,
            sound: currentSong.audio,
            image: currentSong.album?.imagen || 'https://via.placeholder.com/150'
          }}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default PlayList;