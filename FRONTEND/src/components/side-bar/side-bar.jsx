import { Album, LogIn, Plus, Trash2, UserPlus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Content from "../content/content";
import "./side-bar.css";

const iconOptions = ["🎵", "🎸", "🎷", "🎻", "🎤", "🥁"];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");

  const [isEnabled, setIsEnabled] = useState(false); // Estado de habilitación

  // Recuperar el estado de autenticación desde localStorage
  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated") === "true";
    setIsEnabled(authState);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleModal = () => isEnabled && setIsModalOpen(!isModalOpen);

  const handleAddAlbum = () => {
    if (newAlbumName.trim() === "" || !isEnabled) return;

    const randomIcon = iconOptions[Math.floor(Math.random() * iconOptions.length)];
    const newAlbum = { id: Date.now(), name: newAlbumName, icon: randomIcon };

    setAlbums([...albums, newAlbum]);
    setNewAlbumName("");
    setIsModalOpen(false);
  };

  const handleDeleteAlbum = (id) => {
    setAlbums(albums.filter(album => album.id !== id));
  };

  return (
    <div className="main-container">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2>Tu Biblioteca</h2>
        {isEnabled ? (
          <>
            <button className="add-button" onClick={toggleModal}>
              <Plus size={28} /> Agregar Álbum
            </button>
            <nav>
              {albums.map((album) => (
                <div key={album.id} className="album">
                  <span className="icon">{album.icon}</span>
                  <span className="album-name">{album.name}</span>
                  <button className="delete-button" onClick={() => handleDeleteAlbum(album.id)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
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
        <Content/>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>
              <X size={24} />
            </button>
            <h3>Nuevo Álbum</h3>
            <input
              type="text"
              value={newAlbumName}
              onChange={(e) => setNewAlbumName(e.target.value)}
              placeholder="Escribe el nombre del álbum"
            />
            <button className="confirm-button" onClick={handleAddAlbum}>
              Agregar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;