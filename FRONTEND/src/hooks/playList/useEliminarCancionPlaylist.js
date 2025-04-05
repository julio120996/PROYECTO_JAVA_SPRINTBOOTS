import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function useEliminarCancionPlaylist() {
    const API_BASE_URL = useApiBaseUrl();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const eliminarCancionPlaylist = async (id_playlist, id_cancion) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`${API_BASE_URL}/playlist/eliminar-cancion`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    id_playlist: parseInt(id_playlist),
                    id_cancion: parseInt(id_cancion)
                })
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                return true;
            } else {
                throw new Error(data.message || "Error al eliminar la canción");
            }
        } catch (err) {
            console.error("Error al eliminar canción:", err);
            setError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        eliminarCancionPlaylist,
        loading,
        error
    };
}