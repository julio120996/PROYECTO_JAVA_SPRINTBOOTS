const images = import.meta.glob("../../assets/img/*.webp", { eager: true });
const sounds = import.meta.glob("../../assets/sound/*.mp3", { eager: true });

const getImage = (filename) => images[`../../assets/img/${filename}`]?.default || null;
const getSound = (filename) => sounds[`../../assets/sound/${filename}`]?.default || null;

import useSliderSettings from "./useSliderSettings";

const useAlbumsData = () => {
  const { sliderSettingsAuto, sliderSettingsManual } = useSliderSettings();

  // Datos de los álbumes
  const popularAlbums = [
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c7.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c18.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c3.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c16.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c2.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c9.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c4.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c12.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c1.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c20.webp") },
  ];

  const TendeciaAlbums = [
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c11.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c5.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c12.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c7.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c14.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c3.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c18.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c2.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c2.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c1.webp") },
  ];

  const EscuchadosAlbums = [
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c8.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c16.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c5.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c6.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c13.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c20.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c7.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c17.webp") },
    { title: "Divide", artist: "Ed Sheeran", image: getImage("c15.webp") },
    { title: "After Hours", artist: "The Weeknd", image: getImage("c18.webp") },
  ];

  
  const mostPlayedAlbums = [...TendeciaAlbums]; 
  const esPlayedAlbums = [...EscuchadosAlbums]; // Reutilizando los mismos datos

  // Datos de canciones personalizadas
  const personalizedSongs = [
    { title: "Shape of You", artist: "Ed Sheeran", image: getImage("c1.webp"), sound: getSound("m1.mp3") },
    { title: "Blinding Lights", artist: "The Weeknd", image: getImage("c2.webp"), sound: getSound("m2.mp3") },
    { title: "Shape of You", artist: "Ed Sheeran", image: getImage("c4.webp"), sound: getSound("m4.mp3") },
    { title: "Blinding Lights", artist: "The Weeknd", image: getImage("c5.webp"), sound: getSound("m5.mp3") },
    { title: "Shape of You", artist: "Ed Sheeran", image: getImage("c6.webp"), sound: getSound("m6.mp3") },
    { title: "Shape of You", artist: "Ed Sheeran", image: getImage("c7.webp"), sound: getSound("m1.mp3") },
    { title: "Blinding Lights", artist: "The Weeknd", image: getImage("c11.webp"), sound: getSound("m2.mp3") },
    { title: "Shape of You", artist: "Ed Sheeran", image: getImage("c15.webp"), sound: getSound("m4.mp3") },
    { title: "Blinding Lights", artist: "The Weeknd", image: getImage("c17.webp"), sound: getSound("m6.mp3") },
    { title: "Shape of You", artist: "Ed Sheeran", image: getImage("c20.webp"), sound: getSound("m5.mp3") },
    { title: "Blinding Lights", artist: "The Weeknd", image: getImage("c18.webp"), sound: getSound("m6.mp3") },
  ];


  return {
    albums: [
      { title: "Álbumes Populares", data: popularAlbums, settings: sliderSettingsAuto },
      { title: "Álbumes en Tendencia", data:esPlayedAlbums, settings: sliderSettingsManual },
      { title: "Los más Escuchados", data: mostPlayedAlbums, settings: sliderSettingsManual },
    ],
    songs: personalizedSongs,
  };
};

export default useAlbumsData;
