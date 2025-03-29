import { useEffect, useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function useCancionesAleatorias() {
    const API_BASE_URL = useApiBaseUrl();
    const [canciones, setCanciones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const obtenerCancionesAleatorias = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/album/canciones-aleatorias`);
            const data = await response.json();
            
            if (data.success) {
                setCanciones(data.data);
            } else {
                setError(data.message || "Error al obtener canciones aleatorias");
            }
        } catch (error) {
            console.error("❌ Error al obtener canciones aleatorias:", error);
            setError("Error al conectar con el servidor");
        } finally {
            setLoading(false);
        }
    };

    // Opcional: Cargar automáticamente al usar el hook
    useEffect(() => {
        obtenerCancionesAleatorias();
    }, []);

    return {
        canciones,
        loading,
        error,
        obtenerCancionesAleatorias,
    };
}