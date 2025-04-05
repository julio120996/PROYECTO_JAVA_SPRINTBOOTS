import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function useCrearPlaylist() {
    const API_BASE_URL = useApiBaseUrl();
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);

    const crearPlaylist = async (nombre, id_usuario) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/playlist/crear`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ 
                    nombre: nombre, 
                    id_usuario: parseInt(id_usuario) 
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setMensaje(data.message);
                return data.data.id_playlist;
            } else {
                setMensaje(data.message || "Error al crear playlist");
                return null;
            }
        } catch (error) {
            console.error("Error al crear playlist:", error);
            setMensaje(error.message || "Error al conectar con el servidor");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return {
        mensaje,
        loading,
        crearPlaylist,
        setMensaje,
    };
}