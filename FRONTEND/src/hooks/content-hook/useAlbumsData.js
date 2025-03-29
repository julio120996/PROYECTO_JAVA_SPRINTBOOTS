const images = import.meta.glob("../../assets/img/*.webp", { eager: true });
const sounds = import.meta.glob("../../assets/sound/*.mp3", { eager: true });

const getImage = (filename) => images[`../../assets/img/${filename}`]?.default || null;
const getSound = (filename) => sounds[`../../assets/sound/${filename}`]?.default || null;

import useSliderSettings from "./useSliderSettings";

const useAlbumsData = () => {
  const { sliderSettingsAuto, sliderSettingsManual } = useSliderSettings();

  // Datos de los álbumes
 // Datos de los álbumes con IDs únicos
 const popularAlbums = [
  { id: 1, title: "Divide", artist: "Ed Sheeran", image: getImage("c7.webp") },
  { id: 2, title: "After Hours", artist: "The Weeknd", image: getImage("c18.webp") },
  { id: 3, title: "Divide", artist: "Ed Sheeran", image: getImage("c3.webp") },
  { id: 4, title: "After Hours", artist: "The Weeknd", image: getImage("c16.webp") },
  { id: 5, title: "Divide", artist: "Ed Sheeran", image: getImage("c2.webp") },
  { id: 6, title: "After Hours", artist: "The Weeknd", image: getImage("c9.webp") },
  { id: 7, title: "Divide", artist: "Ed Sheeran", image: getImage("c4.webp") },
  { id: 8, title: "After Hours", artist: "The Weeknd", image: getImage("c12.webp") },
  { id: 9, title: "Divide", artist: "Ed Sheeran", image: getImage("c1.webp") },
  { id: 10, title: "After Hours", artist: "The Weeknd", image: getImage("c20.webp") },
];

  const TendeciaAlbums = [
    { id: 11, title: "Divide", artist: "Ed Sheeran", image: getImage("c11.webp") },
    { id: 12, title: "After Hours", artist: "The Weeknd", image: getImage("c5.webp") },
    { id: 13, title: "Divide", artist: "Ed Sheeran", image: getImage("c12.webp") },
    { id: 14, title: "After Hours", artist: "The Weeknd", image: getImage("c7.webp") },
    { id: 15, title: "Divide", artist: "Ed Sheeran", image: getImage("c2.webp") },
  { id: 16, title: "After Hours", artist: "The Weeknd", image: getImage("c9.webp") },
  { id: 17, title: "Divide", artist: "Ed Sheeran", image: getImage("c4.webp") },
  { id: 18, title: "After Hours", artist: "The Weeknd", image: getImage("c12.webp") },
  { id: 19, title: "Divide", artist: "Ed Sheeran", image: getImage("c1.webp") },
  { id: 20, title: "After Hours", artist: "The Weeknd", image: getImage("c20.webp") },
  ];

  const EscuchadosAlbums = [
    { id: 21, title: "Divide", artist: "Ed Sheeran", image: getImage("c8.webp") },
    { id: 22, title: "After Hours", artist: "The Weeknd", image: getImage("c16.webp") },
    { id: 23, title: "Divide", artist: "Ed Sheeran", image: getImage("c5.webp") },
    { id: 24, title: "After Hours", artist: "The Weeknd", image: getImage("c6.webp") },
    { id: 25, title: "Divide", artist: "Ed Sheeran", image: getImage("c2.webp") },
  { id: 26, title: "After Hours", artist: "The Weeknd", image: getImage("c9.webp") },
  { id: 27, title: "Divide", artist: "Ed Sheeran", image: getImage("c4.webp") },
  { id: 28, title: "After Hours", artist: "The Weeknd", image: getImage("c12.webp") },
  { id: 29, title: "Divide", artist: "Ed Sheeran", image: getImage("c1.webp") },
  { id: 30, title: "After Hours", artist: "The Weeknd", image: getImage("c20.webp") },
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
