import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useAlbumes } from "../../hooks/album/useAlbumes.js";
import { useCancionesAleatorias } from "../../hooks/album/useCancionesAleatorias.js";
import useSliderSettings from "../../hooks/content-hook/useSliderSettings.js";
import "./content.css";

const AlbumCard = ({ item }) => {
  const navigate = useNavigate();
  
  const isPlayable = localStorage.getItem("isAuthenticated") === "true";

  const handleClick = () => {
    if (isPlayable) {
      navigate(`/home?albumId=${item.id}`);
    }
  };

  return (
    <div className="px-2" onClick={handleClick}>
      <Card className="card-item">
        <CardMedia component="img" height="150" image={item.image} alt={item.title} className="card-image" />
        <CardContent className="card-content">
          <Typography variant="body1" fontWeight="bold" className="truncate">{item.title}</Typography>
          <Typography variant="body2" color="textSecondary" className="truncate">{item.artist}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const SongCircle = ({ item, onSelect, isPlayable }) => (
  <div className="px-4 text-center" onClick={() => isPlayable && onSelect(item)}>
    <div className="song-circle mx-auto">
      <img src={item.imagen} alt={item.titulo} />
    </div>
    <Typography variant="body1" fontWeight="bold" className="mt-2 truncate">{item.titulo}</Typography>
  </div>
);

const Content = () => {
  // Hook para álbumes
  const {
    albumesPopulares,
    albumesTendencia,
    albumesMasEscuchados,
    loading: loadingAlbumes,
    error: errorAlbumes
  } = useAlbumes();
  
  // Hook para canciones aleatorias
  const {
    canciones,
    loading: loadingCanciones,
    error: errorCanciones
  } = useCancionesAleatorias();
  
  const { sliderSettingsAuto, sliderSettingsManual } = useSliderSettings();

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlayable, setIsPlayable] = useState(false);

  // Transformamos los datos de álbumes
  const albums = [
    {
      title: "Álbumes Populares",
      data: albumesPopulares.map(album => ({
        id: album.id_album,
        title: album.titulo,
        artist: album.nombre_artista,
        image: album.imagen
      })),
      settings: sliderSettingsAuto
    },
    {
      title: "Tendencias Musicales",
      data: albumesTendencia.map(album => ({
        id: album.id_album,
        title: album.titulo,
        artist: album.nombre_artista,
        image: album.imagen
      })),
      settings: sliderSettingsAuto
    },
    {
      title: "Más Escuchados",
      data: albumesMasEscuchados.map(album => ({
        id: album.id_album,
        title: album.titulo,
        artist: album.nombre_artista,
        image: album.imagen
      })),
      settings: sliderSettingsAuto
    }
  ];

  // Sincronizar estado de reproducción con autenticación
  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated") === "true";
    setIsPlayable(authState);
  }, []);

  if (loadingAlbumes || loadingCanciones) {
    return <div className="p-6 bg-gray-100 min-h-screen">Cargando contenido...</div>;
  }

  if (errorAlbumes || errorCanciones) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        {errorAlbumes && <p>Error en álbumes: {errorAlbumes}</p>}
        {errorCanciones && <p>Error en canciones: {errorCanciones}</p>}
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Sección de álbumes */}
      {albums.map(({ title, data, settings }, idx) => (
        <div key={idx}>
          <h1 className="text-3xl font-bold mt-8 mb-6">{title}</h1>
          <Slider {...settings}>{data.map((item, i) => <AlbumCard key={i} item={item} />)}</Slider>
        </div>
      ))}

      {/* Sección de canciones aleatorias */}
      <h1 className="text-3xl font-bold mt-8 mb-6 text-center">Canciones para Ti</h1>
      <Slider {...sliderSettingsManual}>
        {canciones.map((item, i) => (
          <SongCircle 
            key={i} 
            item={item} 
            onSelect={setCurrentSong} 
            isPlayable={isPlayable} 
          />
        ))}
      </Slider>

      {/* Reproductor de música */}
      {currentSong && isPlayable && (
        <div className="music-player">
          <div className="player-info">
            <img src={currentSong.imagen} alt={currentSong.titulo} />
            <div>
              <Typography variant="body1" fontWeight="bold">{currentSong.titulo}</Typography>
            </div>
          </div>
          <div className="player-controls">
            <audio controls autoPlay src={currentSong.audio}>
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;