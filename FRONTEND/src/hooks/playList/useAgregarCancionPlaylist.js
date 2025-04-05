import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function useAgregarCancionPlaylist() {
    const API_BASE_URL = useApiBaseUrl();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const agregarCancionPlaylist = async (id_playlist, id_cancion) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        
        try {
            const response = await fetch(`${API_BASE_URL}/playlist/agregar-cancion`, {
                method: "POST",
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
                setSuccess(true);
                return true;
            } else {
                throw new Error(data.message || "Error al agregar canción");
            }
        } catch (err) {
            console.error("Error al agregar canción:", err);
            setError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        agregarCancionPlaylist,
        loading,
        error,
        success,
        reset: () => {
            setError(null);
            setSuccess(false);
        }
    };
}