import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl";

export function useRecuperarPassword() {
    const API_BASE_URL = useApiBaseUrl();
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);

    // 📝 Recuperar contraseña
    const recuperarPassword = async (datos) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/usuario/actualizar-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos),
            });

            const data = await response.json();
            setLoading(false);

            console.log("📩 Respuesta del backend (Recuperar contraseña):", data);

            if (data.success) {
                setMensaje("Contraseña actualizada correctamente.");
                return true;
            } else {
                setMensaje(data.message || "Error al actualizar la contraseña.");
                return false;
            }
        } catch (error) {
            console.error("❌ Error al recuperar contraseña:", error);
            setMensaje("Error al recuperar la contraseña.");
            setLoading(false);
            return false;
        }
    };

    return {
        mensaje,
        loading,
        recuperarPassword,
        setMensaje,
    };
}
