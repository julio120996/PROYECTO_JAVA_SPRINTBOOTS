import { Album, LogIn, Plus, Trash2, UserPlus, X } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCrearPlaylist } from "../../hooks/playlist/useCrearPlaylist";
import { useEliminarPlaylist } from "../../hooks/playlist/useEliminarPlaylist";
import { usePlaylist } from "../../hooks/playlist/usePlaylist";
import { AuthContext } from "../../hooks/user/AuthContext";
import AlbumPlaylist from "../album/album";
import PlayList from "../album/PlayList-App/PlayList-App";
import Content from "../content/content";
import "./side-bar.css";

const iconOptions = ["🎵", "🎸", "🎷", "🎻", "🎤", "🥁"];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const [currentAlbumId, setCurrentAlbumId] = useState(null);
  const [showPlayList, setShowPlayList] = useState(false);

  // Usar el contexto de autenticación
  const { usuario } = useContext(AuthContext);
  const isEnabled = !!usuario; // Convertir a booleano

  // Hooks para manejar playlists
  const { crearPlaylist } = useCrearPlaylist();
  const { eliminarPlaylist } = useEliminarPlaylist();
  const { playlists, listarPlaylists } = usePlaylist();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const albumId = searchParams.get("albumId");
    setCurrentAlbumId(albumId);
    setShowPlayList(searchParams.has("playList"));
  }, [location.search]);

  useEffect(() => {
    if (usuario?.id_usuario) {
      listarPlaylists(usuario.id_usuario); // Pasar el ID de usuario al listar
    }
  }, [usuario?.id_usuario]); // Dependencia en el ID de usuario

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleModal = () => isEnabled && setIsModalOpen(!isModalOpen);

  const handleAddPlaylist = async () => {
    if (newPlaylistName.trim() === "" || !isEnabled) return;

    if (!usuario?.id_usuario) {
      console.error("ID de usuario no disponible");
      return;
    }

    const idPlaylist = await crearPlaylist(newPlaylistName, usuario.id_usuario);
    
    if (idPlaylist) {
      setNewPlaylistName("");
      setIsModalOpen(false);
      listarPlaylists(usuario.id_usuario); // Actualizar la lista con el ID
    }
  };

  const handleDeletePlaylist = async (id_playlist) => {
    if (!usuario?.id_usuario) {
      console.error("ID de usuario no disponible");
      return;
    }

    const success = await eliminarPlaylist(id_playlist, usuario.id_usuario);
    if (success) {
      listarPlaylists(usuario.id_usuario); // Actualizar la lista con el ID
    }
  };

  const handleDoubleClick = (playlistId) => {
    navigate(`/home?playList=true&playlistId=${playlistId}`);
    setShowPlayList(true);
  };

  return (
    <div className="main-container">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2>Tu Biblioteca</h2>
        {isEnabled ? (
          <>
            <button className="add-button" onClick={toggleModal}>
              <Plus size={28} /> Crear Playlist
            </button>
            <nav>
              {playlists.map((playlist) => {
                const randomIcon = iconOptions[playlist.id_playlist % iconOptions.length];
                return (
                  <div
                    key={playlist.id_playlist}
                    className="album"
                    onDoubleClick={() => handleDoubleClick(playlist.id_playlist, playlist.nombre)}
                  >
                    <span className="icon">{randomIcon}</span>
                    <span className="album-name">{playlist.nombre}</span>
                    <button 
                      className="delete-button" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePlaylist(playlist.id_playlist);
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                );
              })}
            </nav>
          </>
        ) : (
          <div className="auth-container">
            <a href="login">
              <button className="auth-button login">
                <LogIn size={20} /> Iniciar Sesión
              </button>
            </a>
            <a href="/login/registro">
              <button className="auth-button register">
                <UserPlus size={20} /> Registrarse
              </button>
            </a>
          </div>
        )}
      </div>

      <div className="menu-icon" onClick={toggleSidebar}>
        <Album size={48} />
      </div>
      <div className={`content ${isOpen ? "shifted" : ""}`}>
        {showPlayList ? (
          <PlayList />
        ) : currentAlbumId ? (
          <AlbumPlaylist albumId={currentAlbumId} />
        ) : (
          <Content />
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>
              <X size={24} />
            </button>
            <h3>Nueva Playlist</h3>
            <input
              type="text"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              placeholder="Escribe el nombre de la playlist"
              onKeyPress={(e) => e.key === 'Enter' && handleAddPlaylist()}
            />
            <button className="confirm-button" onClick={handleAddPlaylist}>
              Crear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;