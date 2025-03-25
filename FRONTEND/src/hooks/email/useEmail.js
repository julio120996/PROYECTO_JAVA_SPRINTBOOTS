import { useState } from "react";
import { useApiBaseUrl } from "../urlAPI/useApiBaseUrl.js";


export function useEmail() {
    const API_BASE_URL = useApiBaseUrl();
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);
    const [codigoEnviado, setCodigoEnviado] = useState(localStorage.getItem("codigo_verificacion") || null);

    // 📩 Enviar código de verificación
    const enviarCodigo = async (email) => {
        if (!email.trim()) {
            setMensaje("El correo no puede estar vacío.");
            return;
        }

        setLoading(true);
        setMensaje("");

        try {
            const response = await fetch(`${API_BASE_URL}/correo/enviar-codigo`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.trim() }),
            });

            const data = await response.json();
            
            if (response.ok && data.success && data.data && data.data.codigo) {
                const codigo = data.data.codigo.toString().trim();
                setCodigoEnviado(codigo);
                localStorage.setItem("codigo_verificacion", codigo);
                setMensaje("✅ Código enviado correctamente. Revisa tu correo.");
            } else {
                setMensaje(data.message || "❌ Error al enviar el código.");
            }
        } catch (error) {
            console.error("Error al enviar código:", error);
            setMensaje("❌ Error al conectar con el servidor.");
        }

        setLoading(false);
    };

    // ✅ Verificar código ingresado
    const verificarCodigo = (code) => {
        const codigoGuardado = localStorage.getItem("codigo_verificacion");

        if (!codigoGuardado) {
            setMensaje("⚠️ No se ha enviado un código aún.");
            return false;
        }

        if (codigoGuardado === code.trim()) {
            setMensaje("✅ Código verificado correctamente.");
            return true;
        } else {
            setMensaje("❌ Código incorrecto. Inténtalo de nuevo.");
            return false;
        }
    };

    return {
        mensaje,
        loading,
        enviarCodigo,
        verificarCodigo,
        setMensaje,
    };
}
