import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function usePlaylist() {
    const API_BASE_URL = useApiBaseUrl();
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    // 🎵 Obtener las playlists de un usuario específico
    const listarPlaylists = async (idUsuario) => {
        if (!idUsuario) {
            setMensaje("ID de usuario no proporcionado");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/playlist/listar/${idUsuario}`, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setPlaylists(data.data);
                setMensaje(data.message);
            } else {
                setMensaje(data.message || "Error al obtener playlists");
                setPlaylists([]);
            }
        } catch (error) {
            console.error("Error al listar playlists:", error);
            setMensaje(error.message || "Error al conectar con el servidor");
            setPlaylists([]);
        } finally {
            setLoading(false);
        }
    };

    return {
        mensaje,
        loading,
        playlists,
        listarPlaylists,
        setMensaje,
    };
}