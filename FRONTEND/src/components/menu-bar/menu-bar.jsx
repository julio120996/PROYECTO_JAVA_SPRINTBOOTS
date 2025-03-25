import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../hooks/user/AuthContext";

import logo from '../../assets/img/logo.png';
import "./menu-bar.css";

const Menubar = () => {
  const { usuario } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const [anchorEl, setAnchorEl] = useState(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authState);
  }, []);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverOpen(false);
  };

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const handleConfirmLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setIsPopoverOpen(false);
    setIsLogoutModalOpen(false);
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <>
      <AppBar position="fixed" className="menu-bar">
        <Toolbar className="toolbar">
          {/* Logo */}
          <Typography variant="h6" className="logo-container">
            <a href="/"> <img src={logo} alt="Logo" className="logo" /> </a>
          </Typography>

          {/* Menú de Navegación */}
          <div className="nav-links">
          <a href="/home" style={{ textDecoration: "none", color: "inherit" }}>
  <Button color="inherit" className="nav-button">Home</Button>
</a>

            <Button color="inherit" className="nav-button">Explore</Button>
            <Button color="inherit" className="nav-button">Favorites</Button>
          </div>

          {/* Barra de Búsqueda */}
          <TextField
            variant="outlined"
            placeholder="Search for artist, music..."
            className="search-bar"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                borderRadius: 30,
                height: 50,
                fontSize: "1.2rem",
              }
            }}
          />

          {/* Avatar y Nombre de Usuario */}
          <div 
            className="avatar-wrapper"
            onMouseEnter={handleMouseEnter}
          >
            <IconButton color="inherit" className="icon-user-l">
              {usuario?.foto_perfil ? (
                <img src={usuario.foto_perfil} alt={usuario?.nombre ?? "Usuario"} className="user-avatar" />
              ) : (
                <AccountCircle fontSize="large" />
              )}
            </IconButton>

            {usuario && (
              <Typography variant="subtitle1" className="user-name">
                {usuario?.nombre ?? "Usuario"} {usuario?.apellido ?? ""}
              </Typography>
            )}
          </div>

          {/* Panel de Usuario */}
          <Popover
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={() => setIsPopoverOpen(false)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onMouseEnter={() => setIsPopoverOpen(true)}
            onMouseLeave={handleMouseLeave}
          >
            <Paper className="user-panel">
              {isAuthenticated ? (
                <>
                  <a href="/home/user">
                    <Button className="panel-button profile">
                      <PersonIcon className="icon" />
                      <span>Ver perfil</span>
                    </Button>
                  </a>
                  <Button className="panel-button logout" onClick={handleLogout}>
                    <LogoutIcon className="icon" />
                    <span>Cerrar sesión</span>
                  </Button>
                </>
              ) : (
                <>
                  <a href="login">
                    <Button className="panel-button login">
                      <LoginIcon className="icon" />
                      <span>Iniciar sesión</span>
                    </Button>
                  </a>
                  <a href="/login/registro">
                    <Button className="panel-button register">
                      <PersonAddIcon className="icon" />
                      <span>Registrarse</span>
                    </Button>
                  </a>
                </>
              )}
            </Paper>
          </Popover>
        </Toolbar>
      </AppBar>

      {/* Modal de Confirmación de Cierre de Sesión */}
      <Dialog open={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)}>
        <DialogTitle>¿Cerrar sesión?</DialogTitle>
        <DialogContent>
          ¿Estás seguro de que quieres cerrar sesión? Tendrás que volver a iniciar sesión para acceder a tu cuenta.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsLogoutModalOpen(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmLogout} color="secondary">
            Sí, cerrar sesión
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Menubar;
