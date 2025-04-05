import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function useEliminarPlaylist() {
    const API_BASE_URL = useApiBaseUrl();
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);

    const eliminarPlaylist = async (id_playlist, id_usuario) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/playlist/eliminar`, {
                method: "DELETE",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ 
                    id_playlist: parseInt(id_playlist), 
                    id_usuario: parseInt(id_usuario) 
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setMensaje(data.message);
                return true;
            } else {
                setMensaje(data.message || "Error al eliminar playlist");
                return false;
            }
        } catch (error) {
            console.error("Error al eliminar playlist:", error);
            setMensaje(error.message || "Error al conectar con el servidor");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        mensaje,
        loading,
        eliminarPlaylist,
        setMensaje,
    };
}