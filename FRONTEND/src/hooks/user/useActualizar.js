import { useContext, useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl";
import { AuthContext } from "../user/AuthContext"; // Asegúrate de que la ruta es correcta

export function useActualizarUsuario() {
    const API_BASE_URL = useApiBaseUrl();
    
    const { usuario, login } = useContext(AuthContext); // Obtenemos el usuario y la función login del contexto
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);

    // Función para actualizar usuario
    const actualizarUsuario = async (datos) => {
        setLoading(true);
        try {
            const formData = new FormData();
            
            formData.append("id", datos.id_usuario); 
            formData.append("nombre", datos.nombre);
            formData.append("apellido", datos.apellido);

            if (datos.foto_perfil instanceof File) {
                formData.append("foto_perfil", datos.foto_perfil, datos.foto_perfil.name);
            } else {
                formData.append("foto_perfil", datos.foto_perfil);
            }

            console.log("🚀 Enviando datos:", Object.fromEntries(formData.entries()));

            const response = await fetch(`${API_BASE_URL}/usuario/actualizar`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setLoading(false);

            console.log("📩 Respuesta del backend:", data);

            if (data.success) {
                setMensaje("✅ Usuario actualizado correctamente.");

                // 🆕 Actualizar el usuario en el AuthContext y en localStorage
                login(data.data);

                return data.data;
            } else {
                setMensaje(data.message || "❌ Error al actualizar usuario.");
                return null;
            }
        } catch (error) {
            console.error("❌ Error en la actualización:", error);
            setMensaje("❌ Error en la actualización.");
            setLoading(false);
            return null;
        }
    };

    return {
        mensaje,
        loading,
        actualizarUsuario,
        setMensaje,
    };
}
