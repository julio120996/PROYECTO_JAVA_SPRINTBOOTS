import { Edit, PhotoCamera } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, IconButton, Snackbar, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Miku from "../../assets/media/miku.mp4";
import { AuthContext } from "../../hooks/user/AuthContext";
import { useActualizarUsuario } from "../../hooks/user/useActualizar";
import Menubar from "../menu-bar/menu-bar";
import "./userApp.css";

const UserProfile = () => {
    const { usuario, login } = useContext(AuthContext);
    const { actualizarUsuario, loading } = useActualizarUsuario();
    const [isEditing, setIsEditing] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const [editedUser, setEditedUser] = useState({
        id_usuario: usuario?.id_usuario || "",
        nombre: usuario?.nombre || "",
        apellido: usuario?.apellido || "",
        email: usuario?.email || "",
        foto_perfil: usuario?.foto_perfil || "https://via.placeholder.com/300",
    });

    useEffect(() => {
        if (usuario) {
            setEditedUser({
                id_usuario: usuario.id_usuario || "",
                nombre: usuario.nombre || "",
                apellido: usuario.apellido || "",
                email: usuario.email || "",
                foto_perfil: usuario.foto_perfil || "https://via.placeholder.com/300",
            });
        }
    }, [usuario]);

    const handleEditToggle = async () => {
        if (isEditing) {
            if (!editedUser.id_usuario) {
                showSnackbar("❌ No se puede actualizar sin un ID válido.", "error");
                return;
            }

            const datosActualizados = await actualizarUsuario({
                id_usuario: editedUser.id_usuario,
                nombre: editedUser.nombre,
                apellido: editedUser.apellido,
                foto_perfil: editedUser.foto_perfil,
            });

            if (datosActualizados) {
                login(datosActualizados);
                localStorage.setItem("usuario", JSON.stringify(datosActualizados));
                setEditedUser(datosActualizados);
                showSnackbar("✅ Usuario actualizado correctamente.", "success");
            } else {
                showSnackbar("❌ Error al actualizar usuario.", "error");
            }
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEditedUser({ ...editedUser, foto_perfil: file });
        }
    };

    const showSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };

    return (
        <>
            <Menubar />
            <Box className="video-container">
                <video autoPlay loop muted className="background-video">
                    <source src={Miku} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Box className="video-overlay" />
                <Box className="user-profile">
                    <Typography variant="h3" className="user-title">
                        Datos del Usuario
                    </Typography>

                    <Box className="user-content">
                        <Box className="avatar-container">
                            <Avatar
                                src={
                                    editedUser.foto_perfil instanceof File
                                        ? URL.createObjectURL(editedUser.foto_perfil)
                                        : editedUser.foto_perfil
                                }
                                alt="Foto de perfil"
                                className="user-avatar"
                            />
                            {isEditing && (
                                <>
                                    <input
                                        accept="image/*"
                                        type="file"
                                        id="photo-upload"
                                        style={{ display: "none" }}
                                        onChange={handlePhotoChange}
                                    />
                                    <label htmlFor="photo-upload">
                                        <IconButton component="span" className="photo-upload-button" sx={{ color: "white" }}>
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </>
                            )}
                        </Box>

                        <Box className="user-info">
                            {isEditing ? (
                                <>
                                    <TextField
                                        name="nombre"
                                        label="Nombre"
                                        variant="outlined"
                                        value={editedUser.nombre}
                                        onChange={handleChange}
                                        className="edit-field"
                                    />
                                    <TextField
                                        name="apellido"
                                        label="Apellido"
                                        variant="outlined"
                                        value={editedUser.apellido}
                                        onChange={handleChange}
                                        className="edit-field"
                                    />
                                </>
                            ) : (
                                <>
                                    <Typography variant="h2" className="user-name">
                                        {editedUser.nombre} {editedUser.apellido}
                                    </Typography>
                                    <Typography variant="h4" className="user-email">
                                        {editedUser.email}
                                    </Typography>
                                </>
                            )}

                            <Box className="update-button-container">
                                <Button className="edit-button" onClick={handleEditToggle} disabled={loading}>
                                    <Edit /> {isEditing ? "Guardar" : "Editar"}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* 📢 Snackbar (Mensaje flotante) */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    onClose={() => setOpenSnackbar(false)}
                    severity={snackbarSeverity}
                    sx={{ width: "100%" }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default UserProfile;
