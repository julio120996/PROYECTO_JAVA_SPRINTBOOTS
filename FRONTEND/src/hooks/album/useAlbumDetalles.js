// hooks/album/useAlbumDetalles.js
import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function useAlbumDetalles() {
    const API_BASE_URL = useApiBaseUrl();
    const [album, setAlbum] = useState(null);
    const [canciones, setCanciones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const obtenerDetallesAlbum = async (albumId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/album/canciones/${albumId}`);
            const data = await response.json();
            
            if (data.success) {
                setAlbum(data.data.album);
                
                // hooks/album/useAlbumDetalles.js
                const cancionesFormateadas = data.data.canciones.map(cancion => ({
                    ...cancion,
                    subtitlesUrl: cancion.subtitulo || "", // Asegura que siempre haya un string
                    audio: cancion.audio || "", // Asegura que siempre haya un string
                    imagen: cancion.imagen || data.data.album.imagen,
                    artista: data.data.album.artista.nombre,
                    title: cancion.titulo,
                    artist: data.data.album.artista.nombre,
                    image: cancion.imagen || data.data.album.imagen
                  }));
                
                setCanciones(cancionesFormateadas);
            } else {
                setError(data.message || "Error al obtener detalles del álbum");
            }
        } catch (error) {
            console.error("❌ Error al obtener detalles del álbum:", error);
            setError("Error al conectar con el servidor");
        } finally {
            setLoading(false);
        }
    };

    return {
        album,
        canciones,
        loading,
        error,
        obtenerDetallesAlbum
    };
}