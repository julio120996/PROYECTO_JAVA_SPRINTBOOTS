import { useContext, useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";
import { AuthContext } from "./AuthContext.jsx";

export function useLogin() {
    const API_BASE_URL = useApiBaseUrl();
    const { login, logout, usuario } = useContext(AuthContext);
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);

    const loginUsuarioEmail = async (datos) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/usuario/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: datos.email, password: datos.password }),
            });

            const data = await response.json();
            setLoading(false);
            console.log("📩 Respuesta del backend (email):", data);

            if (data.success) {
                setMensaje("Login exitoso");
                login(data.data); // Guarda el usuario en el contexto
                return true;
            } else {
                setMensaje(data.message || "Error al validar el usuario");
                return false;
            }
        } catch (error) {
            console.error("❌ Error al validar el usuario", error);
            setMensaje("Error al validar el usuario");
            setLoading(false);
            return false;
        }
    };

    const loginUsuarioGoogle = async (datos) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/usuario/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id_autenticacion_externa: datos.id_autenticacion_externa }),
            });

            const data = await response.json();
            setLoading(false);
            console.log("📩 Respuesta del backend (Google):", data);

            if (data.success) {
                setMensaje("Login con Google exitoso.");
                login(data.data); // Guarda el usuario en el contexto
                return true;
            } else {
                setMensaje(data.message || "Error en el inicio de sesión con Google.");
                return false;
            }
        } catch (error) {
            console.error("❌ Error en el inicio de sesión con Google:", error);
            setMensaje("Error en el inicio de sesión con Google.");
            setLoading(false);
            return false;
        }
    };

    return {
        mensaje,
        loading,
        usuario,
        loginUsuarioEmail,
        loginUsuarioGoogle,
        logout,
        setMensaje,
    };
}
