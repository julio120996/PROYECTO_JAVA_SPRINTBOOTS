import { Add, Close, Favorite, MoreHoriz, Pause, PlayArrow } from "@mui/icons-material";
import { Button, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAlbumDetalles } from "../../hooks/album/useAlbumDetalles";
import { useAgregarCancionPlaylist } from "../../hooks/playlist/useAgregarCancionPlaylist";
import { useCrearPlaylist } from "../../hooks/playlist/useCrearPlaylist";
import { usePlaylist } from "../../hooks/playlist/usePlaylist";
import { AuthContext } from "../../hooks/user/AuthContext";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import SongDetailView from "../SongDetails/SongDetailView";
import "./album.css";

const AlbumPlaylist = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const albumId = searchParams.get("albumId");
  const { usuario } = useContext(AuthContext);

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
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);



  // Hooks para playlists
  const { playlists, listarPlaylists } = usePlaylist();
  const { crearPlaylist, loading: creatingPlaylist } = useCrearPlaylist();
  const { agregarCancionPlaylist } = useAgregarCancionPlaylist();






  useEffect(() => {
    if (albumId) {
      obtenerDetallesAlbum(albumId);
    }
  }, [albumId]);

  useEffect(() => {
    if (songs.length > 0) {
      const withFixedDurations = songs.map(song => ({
        ...song,
        duracion: song.duracion || Math.floor(Math.random() * (300 - 120 + 1) + 120),
        id_cancion: song.id_cancion ?? song.id,  // Usa '??' en lugar de '||' para evitar sobrescribir valores falsy como 0
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
    if (usuario?.id_usuario) {
      listarPlaylists(usuario.id_usuario);
    }
  };

  const handleClosePlaylistModal = () => {
    setOpenPlaylistModal(false);
    setShowCreateForm(false);
    setNewPlaylistName("");
  };

  // Modifica la función handleAddToPlaylist así:
  const handleAddToPlaylist = async (id_playlist) => {
    if (!selectedSong?.id_cancion || !usuario?.id_usuario) {
      console.error("Falta información: canción o usuario no disponible");
      return;
    }

    try {
      const success = await agregarCancionPlaylist(id_playlist, selectedSong.id_cancion);

      if (success) {
        // Cierra el modal solo si fue exitoso
        handleClosePlaylistModal();
        // Opcional: mostrar notificación de éxito
        console.log(`Canción agregada a playlist ${id_playlist}`);
      } else {
        console.error("Error al agregar canción a playlist");
      }
    } catch (error) {
      console.error("Error al agregar canción:", error);
    }
  };

  const handleCreatePlaylist = async () => {
    if (!newPlaylistName.trim() || !usuario?.id_usuario) return;

    const idPlaylist = await crearPlaylist(newPlaylistName, usuario.id_usuario);

    if (idPlaylist) {
      await handleAddToPlaylist(idPlaylist);
    }
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

      {/* Modal de Playlists */}
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
            {playlists.map((playlist) => (
              <ListItem key={playlist.id_playlist} disablePadding>
                <ListItemButton
                  onClick={() => {
                    console.log(`Agregando canción ${selectedSong?.id_cancion} a playlist ${playlist.id_playlist}`);
                    handleAddToPlaylist(playlist.id_playlist);
                  }}
                >
                  <ListItemText
                    primary={playlist.nombre}

                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {showCreateForm ? (
            <div className="create-playlist-form">
              <input
                type="text"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                placeholder="Nombre de la nueva playlist"
                className="playlist-input"
              />
              <div className="form-actions">
                <Button onClick={() => setShowCreateForm(false)}>Cancelar</Button>
                <Button
                  onClick={handleCreatePlaylist}
                  disabled={!newPlaylistName.trim() || creatingPlaylist}
                >
                  {creatingPlaylist ? "Creando..." : "Crear"}
                </Button>
              </div>
            </div>
          ) : (
            <Button
              fullWidth
              className="create-playlist-button"
              startIcon={<Add />}
              onClick={() => setShowCreateForm(true)}
            >
              Crear nueva playlist
            </Button>
          )}
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