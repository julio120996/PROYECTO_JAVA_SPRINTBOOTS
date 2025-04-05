import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function usePlaylistDetalles() {
    const API_BASE_URL = useApiBaseUrl();
    const [playlistDetalles, setPlaylistDetalles] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const obtenerPlaylistDetalles = async (id_usuario, id_playlist) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`${API_BASE_URL}/playlist/usuario`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    id_usuario: parseInt(id_usuario),
                    id_playlist: parseInt(id_playlist)
                })
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setPlaylistDetalles(data.data);
                return data.data;
            } else {
                throw new Error(data.message || "Error al obtener los detalles de la playlist");
            }
        } catch (err) {
            console.error("Error al obtener detalles de la playlist:", err);
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return {
        playlistDetalles,
        loading,
        error,
        obtenerPlaylistDetalles,
        setPlaylistDetalles
    };
}