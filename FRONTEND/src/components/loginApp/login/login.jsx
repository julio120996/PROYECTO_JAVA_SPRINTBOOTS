import { Google } from "@mui/icons-material";
import { Alert, Box, Button, Divider, Snackbar, TextField, Typography } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/miku.png";
import { useAuthHandler } from "../../../hooks/states/useAuthHandler.js";
import { useLogin } from "../../../hooks/user/useLogin";
import { useVerificar } from "../../../hooks/user/useVerificacion";
import "../login.css";

const Login = () => {
  const navigate = useNavigate();
  const { verificarCorreo } = useVerificar();
  const { loginUsuarioEmail, loginUsuarioGoogle, mensaje, loading } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   // Estados para autenticación y funcionalidades
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [isEnabled, setIsEnabled] = useState(false);
   const [isPlayable, setIsPlayable] = useState(false);
   
   // Hook para manejar autenticación global
    useAuthHandler({ isAuthenticated, setIsAuthenticated, setIsEnabled, setIsPlayable }); 
   

  // Estados para el mensaje flotante
  const [mensajeAlerta, setMensajeAlerta] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);


  const mostrarAlerta = (mensaje, tipo) => {
    setMensajeAlerta({ mensaje, tipo });
    setOpenSnackbar(true);
  };

  const cerrarSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    document.body.classList.add("no-padding-top");
    return () => {
      document.body.classList.remove("no-padding-top");
    };
  }, []);

  const handleLoginEmail = async () => {
    const success = await loginUsuarioEmail({ email, password });
    if (success) {
      mostrarAlerta("Inicio de sesión exitoso", "success");
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // Guardar en localStorage
      navigate("/home");
    } else {
      mostrarAlerta("Error en el inicio de sesión", "error");
    }
  };
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
        );
  
        const email = userInfo.data.email;
        const googleId = userInfo.data.sub;
        console.log("Usuario autenticado:", userInfo.data);
  
        // Verificar si el correo ya existe en la base de datos
        const usuario = await verificarCorreo(email);  // Ahora `usuario` es un objeto completo
  
        if (!usuario || !usuario.success) {
          // Si el usuario no existe, guardamos sus datos y lo mandamos a registro
          localStorage.setItem("registroTemporal", JSON.stringify({ email, googleId }));
          navigate("/login/registro?step=4");
          return;
        }
  
        // Si el usuario existe, verificamos si está asociado a Google
        if (usuario.data.id_autenticacion_externa !== googleId) {
          mostrarAlerta("Esta cuenta no está asociada con Google. Inicia sesión con tu correo y contraseña.", "error");
          return;
        }
  
        // Si el usuario está asociado a Google, iniciamos sesión
        const success = await loginUsuarioGoogle({ id_autenticacion_externa: googleId });
  
        if (success) {
          mostrarAlerta("Inicio de sesión con Google exitoso", "success");
          setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // Guardar en localStorage
    navigate("/home");
        } else {
          mostrarAlerta("Error al iniciar sesión con Google.", "error");
        }
  
      } catch (error) {
        console.error("Error obteniendo datos del usuario:", error);
        mostrarAlerta("Error al procesar el inicio de sesión con Google.", "error");
      }
    },
    onError: () => mostrarAlerta("Error al iniciar sesión con Google", "error"),
    ux_mode: "popup",
  });
  

  return (
    <div className="login-container">
      <div className="header">
        <img src={logo} alt="Meow Logo" className="logo-miku" />
        <Typography variant="h5" className="meow-title">Meow</Typography>
      </div>

      <Box className="login-box">
        <Typography variant="h4" className="title">Iniciar sesión</Typography>

        <Button
          variant="contained"
          startIcon={<Google />}
          className="google-login"
          onClick={() => login()}
        >
          Iniciar sesión con Google
        </Button>

        <Divider className="divider">o</Divider>

        <TextField
          fullWidth
          variant="outlined"
          label="Correo electrónico"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ className: "input-text" }}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Contraseña"
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ className: "input-text" }}
        />

        {mensaje && <Typography color="error">{mensaje}</Typography>}

        <Button
          variant="contained"
          className="login-btn"
          onClick={handleLoginEmail}
          disabled={loading}
        >
          {loading ? "Cargando..." : "Iniciar sesión"}
        </Button>

        <a href="/login/recuperar">
          <Typography variant="body2" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </Typography>
        </a>

        <a href="/login/registro">
          <Typography variant="body2" className="forgot-password">
            Regístrate
          </Typography>
        </a>
      </Box>

      {/* Snackbar para mensajes flotantes */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={cerrarSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={cerrarSnackbar} severity={mensajeAlerta?.tipo} variant="filled">
          {mensajeAlerta?.mensaje}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
