import { Alert, Avatar, Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../../assets/img/miku.png";
import { useEmail } from "../../../hooks/email/useEmail";
import { useAuthHandler } from "../../../hooks/states/useAuthHandler.js";
import { useLogin } from "../../../hooks/user/useLogin";
import { useRegistro } from "../../../hooks/user/useRegistro";
import { useVerificar } from "../../../hooks/user/useVerificacion";

import "../login.css";

const Registro = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialStep = Number(searchParams.get("step")) || 1;
    const [step, setStep] = useState(initialStep);
    const [form, setForm] = useState({
        email: "",
        code: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        profilePicture: ""
    });
    const { loginUsuarioGoogle } = useLogin();

    //const [buttonText, setButtonText] = useState("Siguiente");
    const [passwordError, setPasswordError] = useState("");
    const [alerta, setAlerta] = useState({ open: false, message: "", severity: "" });
    const [loadingButton, setLoadingButton] = useState(false);

    const navigate = useNavigate();
    const { loading, enviarCodigo, verificarCodigo } = useEmail();
    const { verificarCorreo } = useVerificar();
    const { registrarUsuario } = useRegistro();
    const { registrarUsuarioGoogle } = useRegistro();

      // Estados para autenticación y funcionalidades
       const [isAuthenticated, setIsAuthenticated] = useState(false);
       const [isEnabled, setIsEnabled] = useState(false);
       const [isPlayable, setIsPlayable] = useState(false);
       
       // Hook para manejar autenticación global
        useAuthHandler({ isAuthenticated, setIsAuthenticated, setIsEnabled, setIsPlayable }); 

    useEffect(() => {
        document.body.classList.add("no-padding-top");
        return () => document.body.classList.remove("no-padding-top");
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm({ ...form, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };


    const mostrarAlerta = (message, severity) => {
        setAlerta({ open: true, message, severity });
        setTimeout(() => setAlerta({ open: false, message: "", severity: "" }), 3000);
    };

    const handleVerificarCorreo = async () => {
        if (!form.email.trim()) {
            mostrarAlerta("El correo es obligatorio.", "error");
            return;
        }
        
        setLoadingButton(true);
    
        const respuesta = await verificarCorreo(form.email.trim());  // Ahora `respuesta` es un objeto
    
        if (respuesta && respuesta.success) {
            mostrarAlerta("Este correo ya está registrado.", "error");
        } else {
            await enviarCodigo(form.email.trim());
            setStep(2);
        }
    
        setLoadingButton(false);
    };
    

    const handleVerificarCodigo = async () => {
        if (!form.code.trim()) {
            mostrarAlerta("El código es obligatorio.", "error");
            return;
        }
        setLoadingButton(true);
        const valido = verificarCodigo(form.code.trim());
        if (valido) {
            setStep(3);
        } else {
            mostrarAlerta("Código incorrecto.", "error");
        }
        setLoadingButton(false);
    };

    const handleVerificarContrasena = () => {
        if (!form.password.trim() || !form.confirmPassword.trim()) {
            mostrarAlerta("Ambos campos de contraseña son obligatorios.", "error");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setPasswordError("Las contraseñas no coinciden.");
            return;
        }
        setPasswordError("");
        setStep(4);
    };


   const handleRegistro = async () => {
    if (!form.firstName.trim() || !form.lastName.trim()) {
        mostrarAlerta("El nombre y apellido son obligatorios.", "error");
        return;
    }
    if (!form.profilePicture) {
        mostrarAlerta("La foto de perfil es obligatoria.", "error");
        return;
    }

    setLoadingButton(true);

    // Verifica si la contraseña está vacía o es nula
    const esGoogle = !form.password?.trim();

    const datosUsuario = {
        nombre: form.firstName.trim(),
        apellido: form.lastName.trim(),
        email: form.email.trim(),
        password: esGoogle ? "" : form.password.trim(), // Solo guarda la contraseña si no es Google
        foto_perfil: form.profilePicture,
        id_autenticacion_externa: esGoogle ? form.googleId : null, // Solo usa el ID de Google si no hay contraseña
    };

    try {
        const success = esGoogle
            ? await registrarUsuarioGoogle(datosUsuario)
            : await registrarUsuario(datosUsuario);

        if (success) {
            mostrarAlerta("Registro exitoso. Redirigiendo...", "success");

            if (esGoogle) {
                // Iniciar sesión automáticamente si es Google
                const loginSuccess = await loginUsuarioGoogle({ id_autenticacion_externa: form.googleId });
                if (loginSuccess) {
                    setIsAuthenticated(true);
                    localStorage.setItem("isAuthenticated", "true"); // Guardar en localStorage
                    navigate("/home");
                    return;
                }
            }

            setTimeout(() => {
                navigate("/login"); // Redirige al login si no es Google
            }, 2000);
        } else {
            throw new Error("Registro fallido");
        }
    } catch (error) {
        console.error("Error en el registro:", error);
        mostrarAlerta("Error en el registro. Inténtalo de nuevo.", "error");
    } finally {
        setLoadingButton(false);
    }
};

    
    
    useEffect(() => {
        const datosGuardados = localStorage.getItem("registroTemporal");
        if (datosGuardados) {
            const { email, googleId } = JSON.parse(datosGuardados);
            setForm((prevForm) => ({
                ...prevForm,
                email: email || "",
                googleId: googleId || null // Asegura que googleId se almacene
            }));
        }
    }, []);
    
      


    return (
        <div className="login-container">
            <div className="header">
                <img src={logo} alt="Meow Logo" className="logo-miku" />
                <Typography variant="h5" className="meow-title">Meow</Typography>
            </div>

            <Box className="login-box">
                <Typography variant="h4" className="title">Registro</Typography>

                {step === 1 && (
                    <>
                        <TextField fullWidth variant="outlined" label="Correo electrónico" name="email" value={form.email} onChange={handleChange} />
                        <Button variant="contained" className="login-btn" onClick={handleVerificarCorreo} disabled={loadingButton}>{loadingButton ? "Verificando..." : "Siguiente"}</Button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <TextField fullWidth variant="outlined" label="Código de verificación" name="code" value={form.code} onChange={handleChange} />
                        <Button className="forgot-password" variant="text" onClick={() => enviarCodigo(form.email)}>Reenviar código</Button>
                        <Button variant="contained" className="login-btn" onClick={handleVerificarCodigo} disabled={loadingButton}>{loadingButton ? "Verificando código..." : "Siguiente"}</Button>
                    </>
                )}

                {step === 3 && (
                    <>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Contraseña"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Confirmar contraseña"
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            error={!!passwordError}
                            helperText={passwordError}
                        />
                        <Button
                            variant="contained"
                            className="login-btn"
                            onClick={handleVerificarContrasena}
                        >
                            Siguiente
                        </Button>
                    </>
                )}


                {step === 4 && (
                    <>
                        <TextField fullWidth variant="outlined" label="Nombre" name="firstName" value={form.firstName} onChange={handleChange} />
                        <TextField fullWidth variant="outlined" label="Apellido" name="lastName" value={form.lastName} onChange={handleChange} />
                        <input accept="image/*" type="file" onChange={handleFileChange} style={{ display: "none" }} id="upload-photo" />
                        <label htmlFor="upload-photo">
                            <Button variant="contained" component="span">Subir Foto</Button>
                        </label>
                        {form.profilePicture && <Avatar src={form.profilePicture} alt="Foto" sx={{ width: 80, height: 80, marginTop: 2 }} />}
                        <Button variant="contained" className="login-btn" onClick={handleRegistro} disabled={loadingButton}>{loadingButton ? "Registrando..." : "Siguiente"}</Button>
                    </>
                )}
            </Box>


            <Snackbar open={alerta.open} autoHideDuration={3000} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                <Alert severity={alerta.severity} sx={{ width: "100%" }}>{alerta.message}</Alert>
            </Snackbar>
        </div>
    );
};

export default Registro;
