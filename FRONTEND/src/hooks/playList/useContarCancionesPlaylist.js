import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function useContarCancionesPlaylist() {
    const API_BASE_URL = useApiBaseUrl();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const contarCancionesPlaylist = async (id_usuario, id_album) => { // Cambiado a id_album
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`${API_BASE_URL}/playlist/contar-canciones`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    id_usuario: parseInt(id_usuario),
                    id_album: parseInt(id_album) // Cambiado a id_album
                })
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                return data.data.total_canciones;
            } else {
                throw new Error(data.message || "Error al contar canciones");
            }
        } catch (err) {
            console.error("Error al contar canciones:", err);
            setError(err.message);
            return 0;
        } finally {
            setLoading(false);
        }
    };

    return {
        contarCancionesPlaylist,
        loading,
        error
    };
}