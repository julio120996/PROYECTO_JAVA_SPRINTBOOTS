import { Alert, Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import logo from "../../../assets/img/miku.png";
import { useEmail } from "../../../hooks/email/useEmail";
import { useRecuperarPassword } from "../../../hooks/user/useRecuperacion";
import { useVerificar } from "../../../hooks/user/useVerificacion";
import "../login.css";

const Recuperar = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: ""
  });
  const [mensaje, setMensaje] = useState({ text: "", type: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir

  const { verificarCorreo } = useVerificar();
  const { enviarCodigo, verificarCodigo } = useEmail();
  const { recuperarPassword } = useRecuperarPassword();

  useEffect(() => {
    document.body.classList.add("no-padding-top");
    return () => document.body.classList.remove("no-padding-top");
  }, []);

  const handleNext = async () => {
    setMensaje({ text: "", type: "" });
    setLoading(true);

    if (step === 1) {
      const data = await verificarCorreo(form.email);
      
      if (!data || !data.success) {
        setMensaje({ text: "El correo no está registrado.", type: "error" });
        setOpenSnackbar(true);
        setLoading(false);
        return;
      }

      if (data.data.id_autenticacion_externa !== null) {
        setMensaje({ text: "Esta cuenta está asociada con Google. Inicia sesión con Google.", type: "error" });
        setOpenSnackbar(true);
        setLoading(false);
        return;
      }

      await enviarCodigo(form.email);
      setMensaje({ text: "Código enviado correctamente.", type: "success" });
      setOpenSnackbar(true);
      setStep(2);

    } else if (step === 2) {
      if (verificarCodigo(form.code)) {
        setMensaje({ text: "Código verificado correctamente.", type: "success" });
        setOpenSnackbar(true);
        setStep(3);
      } else {
        setMensaje({ text: "Código incorrecto.", type: "error" });
        setOpenSnackbar(true);
      }
    } else if (step === 3) {
      if (form.password !== form.confirmPassword) {
        setMensaje({ text: "Las contraseñas no coinciden.", type: "error" });
        setOpenSnackbar(true);
        setLoading(false);
        return;
      }

      const success = await recuperarPassword({
        email: form.email,
        password: form.password
      });

      if (success) {
        setMensaje({ text: "Contraseña actualizada correctamente.", type: "success" });
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate("/login"); // Redirigir al login después de 2 segundos
        }, 2000);
      } else {
        setMensaje({ text: "Error al actualizar la contraseña.", type: "error" });
        setOpenSnackbar(true);
      }
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="header">
        <img src={logo} alt="Meow Logo" className="logo-miku" />
        <Typography variant="h5" className="meow-title">Meow</Typography>
      </div>

      <Box className="login-box">
        <Typography variant="h4" className="title">Recuperar contraseña</Typography>

        {step === 1 && (
          <>
            <TextField fullWidth variant="outlined" label="Correo electrónico" name="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="input-field" />
            <Button variant="contained" className="login-btn" onClick={handleNext} disabled={loading}>{loading ? "Verificando..." : "Siguiente"}</Button>
          </>
        )}

        {step === 2 && (
          <>
            <TextField fullWidth variant="outlined" label="Código de verificación" name="code" value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} className="input-field" />
            <Typography variant="body2" className="forgot-password" onClick={() => enviarCodigo(form.email)}>Reenviar código</Typography>
            <Button variant="contained" className="login-btn" onClick={handleNext} disabled={loading}>{loading ? "Verificando..." : "Siguiente"}</Button>
          </>
        )}

        {step === 3 && (
          <>
            <TextField fullWidth variant="outlined" label="Nueva contraseña" type="password" name="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} className="input-field" />
            <TextField fullWidth variant="outlined" label="Confirmar contraseña" type="password" name="confirmPassword" value={form.confirmPassword} onChange={e => setForm({ ...form, confirmPassword: e.target.value })} className="input-field" />
            <Button variant="contained" className="login-btn" onClick={handleNext} disabled={loading}>{loading ? "Actualizando contraseña..." : "Cambiar contraseña"}</Button>
          </>
        )}
      </Box>

      {/* Mensaje flotante en la parte superior derecha */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity={mensaje.type} sx={{ width: "100%" }}>
          {mensaje.text}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Recuperar;