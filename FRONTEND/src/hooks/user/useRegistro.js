import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";

export function useRegistro() {
    const API_BASE_URL = useApiBaseUrl();
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);

    // 📝 Registrar un nuevo usuario con email y contraseña
    const registrarUsuario = async (datos) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("nombre", datos.nombre);
            formData.append("apellido", datos.apellido);
            formData.append("email", datos.email);
            formData.append("password", datos.password);

            // 📷 Si la imagen es Base64, conviértela a Blob
            if (datos.foto_perfil?.startsWith("data:image")) {
                const res = await fetch(datos.foto_perfil);
                const blob = await res.blob();
                formData.append("foto_perfil", blob, "perfil.jpg");
            }

            console.log("🚀 Enviando datos al backend:", Object.fromEntries(formData.entries()));

            const response = await fetch(`${API_BASE_URL}/usuario/agregar`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setLoading(false);

            console.log("📩 Respuesta del backend:", data);

            if (data.success) {
                setMensaje("Registro exitoso.");
                return true;
            } else {
                setMensaje(data.message || "Error en el registro.");
                return false;
            }
        } catch (error) {
            console.error("❌ Error en el registro:", error);
            setMensaje("Error en el registro.");
            setLoading(false);
            return false;
        }
    };

    // 📝 Registrar un usuario con Google
    const registrarUsuarioGoogle = async (datos) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("nombre", datos.nombre);
            formData.append("apellido", datos.apellido);
            formData.append("email", datos.email);
            formData.append("id_autenticacion_externa", datos.id_autenticacion_externa);
    
            // 📷 Si la imagen es Base64, conviértela a Blob
            if (datos.foto_perfil?.startsWith("data:image")) {
                const res = await fetch(datos.foto_perfil);
                const blob = await res.blob();
                formData.append("foto_perfil", blob, "perfil.jpg");
            } else if (datos.foto_perfil) {
                // Si ya es una URL, la enviamos como string
                formData.append("foto_perfil", datos.foto_perfil);
            }
    
            console.log("🚀 Enviando datos de Google al backend:", Object.fromEntries(formData.entries()));
    
            const response = await fetch(`${API_BASE_URL}/usuario/agregar`, {
                method: "POST",
                body: formData,
            });
    
            const data = await response.json();
            setLoading(false);
    
            console.log("📩 Respuesta del backend (Google):", data);
    
            if (data.success) {
                setMensaje("Registro con Google exitoso.");
                return true;
            } else {
                setMensaje(data.message || "Error en el registro con Google.");
                return false;
            }
        } catch (error) {
            console.error("❌ Error en el registro con Google:", error);
            setMensaje("Error en el registro con Google.");
            setLoading(false);
            return false;
        }
    };
    
    return {
        mensaje,
        loading,
        registrarUsuario,
        registrarUsuarioGoogle,
        setMensaje,
    };
}
