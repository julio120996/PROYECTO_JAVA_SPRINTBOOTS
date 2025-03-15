import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useAlbumsData from "../../hooks/content-hook/useAlbumsData.js";
import useSliderSettings from "../../hooks/content-hook/useSliderSettings.js";
import "./content.css";

const AlbumCard = ({ item }) => (
  <div className="px-2">
    <Card className="card-item">
      <CardMedia component="img" height="150" image={item.image} alt={item.title} className="card-image" />
      <CardContent className="card-content">
        <Typography variant="body1" fontWeight="bold" className="truncate">{item.title}</Typography>
        <Typography variant="body2" color="textSecondary" className="truncate">{item.artist}</Typography>
      </CardContent>
    </Card>
  </div>
);

const SongCircle = ({ item, onSelect, isPlayable }) => (
  <div className="px-4 text-center" onClick={() => isPlayable && onSelect(item)}>
    <div className="song-circle mx-auto">
      <img src={item.image} alt={item.title} />
    </div>
    <Typography variant="body1" fontWeight="bold" className="mt-2 truncate">{item.title}</Typography>
    <Typography variant="body2" color="textSecondary" className="truncate">{item.artist}</Typography>
  </div>
);

const Content = () => {
  const { albums, songs } = useAlbumsData();
  const { sliderSettingsAuto, sliderSettingsManual } = useSliderSettings();

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlayable, setIsPlayable] = useState(true); // Cambia a false si solo quieres visualizar

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {albums.map(({ title, data, settings }, idx) => (
        <div key={idx}>
          <h1 className="text-3xl font-bold mt-8 mb-6">{title}</h1>
          <Slider {...settings}>{data.map((item, i) => <AlbumCard key={i} item={item} />)}</Slider>
        </div>
      ))}

      <h1 className="text-3xl font-bold mt-8 mb-6 text-center">Canciones para Ti</h1>
      <Slider {...sliderSettingsManual}>
        {songs.map((item, i) => <SongCircle key={i} item={item} onSelect={setCurrentSong} isPlayable={isPlayable} />)}
      </Slider>

      {/* Reproductor de música */}
      {currentSong && isPlayable && (
        <div className="music-player">
          <div className="player-info">
            <img src={currentSong.image} alt={currentSong.title} />
            <div>
              <Typography variant="body1" fontWeight="bold">{currentSong.title}</Typography>
              <Typography variant="body2" color="textSecondary">{currentSong.artist}</Typography>
            </div>
          </div>
          <div className="player-controls">
            <audio controls autoPlay src={currentSong.sound}>
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
