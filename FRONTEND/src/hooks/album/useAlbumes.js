import { useEffect, useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";


export function useAlbumes() {
    const API_BASE_URL = useApiBaseUrl();
    const [albumesPopulares, setAlbumesPopulares] = useState([]);
    const [albumesTendencia, setAlbumesTendencia] = useState([]);
    const [albumesMasEscuchados, setAlbumesMasEscuchados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const obtenerAlbumesPopulares = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/album/populares`);
            const data = await response.json();
            
            if (data.success) {
                setAlbumesPopulares(data.data);
            } else {
                setError(data.message || "Error al obtener álbumes populares");
            }
        } catch (error) {
            console.error("❌ Error al obtener álbumes populares:", error);
            setError("Error al obtener álbumes populares");
        } finally {
            setLoading(false);
        }
    };

    const obtenerAlbumesTendencia = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/album/tendencia`);
            const data = await response.json();
            
            if (data.success) {
                setAlbumesTendencia(data.data);
            } else {
                setError(data.message || "Error al obtener álbumes en tendencia");
            }
        } catch (error) {
            console.error("❌ Error al obtener álbumes en tendencia:", error);
            setError("Error al obtener álbumes en tendencia");
        } finally {
            setLoading(false);
        }
    };

    const obtenerAlbumesMasEscuchados = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/album/mas-escuchados`);
            const data = await response.json();
            
            if (data.success) {
                setAlbumesMasEscuchados(data.data);
            } else {
                setError(data.message || "Error al obtener álbumes más escuchados");
            }
        } catch (error) {
            console.error("❌ Error al obtener álbumes más escuchados:", error);
            setError("Error al obtener álbumes más escuchados");
        } finally {
            setLoading(false);
        }
    };

    // Función para obtener todos los álbumes de una vez
    const obtenerTodosLosAlbumes = async () => {
        setLoading(true);
        try {
            await Promise.all([
                obtenerAlbumesPopulares(),
                obtenerAlbumesTendencia(),
                obtenerAlbumesMasEscuchados()
            ]);
        } catch (error) {
            console.error("❌ Error al obtener todos los álbumes:", error);
            setError("Error al obtener todos los álbumes");
        } finally {
            setLoading(false);
        }
    };

    // Opcional: Cargar todos los álbumes automáticamente al usar el hook
    useEffect(() => {
        obtenerTodosLosAlbumes();
    }, []);

    return {
        albumesPopulares,
        albumesTendencia,
        albumesMasEscuchados,
        loading,
        error,
        obtenerAlbumesPopulares,
        obtenerAlbumesTendencia,
        obtenerAlbumesMasEscuchados,
        obtenerTodosLosAlbumes,
    };
}