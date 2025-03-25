import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthHandler({ isAuthenticated, setIsAuthenticated, setIsEnabled, setIsPlayable }) {
    const navigate = useNavigate();

    useEffect(() => {
        const authState = localStorage.getItem("isAuthenticated") === "true";
        if (authState) {
            setIsAuthenticated(true);
            setIsEnabled(true);
            setIsPlayable(true);
        }
    }, [setIsAuthenticated, setIsEnabled, setIsPlayable]);

    useEffect(() => {
        if (isAuthenticated) {
            setIsEnabled(true);
            setIsPlayable(true);
            localStorage.setItem("isAuthenticated", "true"); // Guardar estado en localStorage
            navigate("/home");
        } else {
            localStorage.removeItem("isAuthenticated"); // Limpiar estado al cerrar sesión
        }
    }, [isAuthenticated, setIsEnabled, setIsPlayable, navigate]);

    return { setIsAuthenticated };
}
