import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function useVerificar() {
    const API_BASE_URL = useApiBaseUrl();
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);

    // 🔍 Verifica si el correo ya está registrado
    const verificarCorreo = async (email) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/usuario/verificar`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim() }),
            });

            const data = await response.json();
            setLoading(false);

            return data; // Devuelve todo el objeto data
        } catch (error) {
            console.error("Error al verificar correo:", error);
            setMensaje("Error al verificar el correo.");
            setLoading(false);
            return null;
        }
    };

    return {
        mensaje,
        loading,
        verificarCorreo,
        setMensaje,
    };
}