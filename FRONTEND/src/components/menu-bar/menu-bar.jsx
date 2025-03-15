import AccountCircle from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import logo from '../../assets/img/logo.png';
import "./menu-bar.css";

const Menubar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <>
<AppBar position="fixed" className="menu-bar">


      <Toolbar className="toolbar">
        {/* Logo */}
        <Typography variant="h6" className="logo-container">
        <a href="/">  <img src={logo} alt="Logo" className="logo" /> </a>
        </Typography>

        {/* Menú de Navegación */}
        <div className="nav-links">
          <Button color="inherit" className="nav-button">Home</Button>
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

        {/* Icono de Usuario con Panel Flotante */}
        <IconButton
          color="inherit"
          className="icon-user"
          onMouseEnter={handleMouseEnter}
        >
          <AccountCircle fontSize="large" />
        </IconButton>

        {/* Panel de Iniciar Sesión / Registrarse */}
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleMouseLeave}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onMouseLeave={handleMouseLeave}
        >
          <Paper className="user-panel">
            <Button className="panel-button login">
              <LoginIcon className="icon" />
              <span>Iniciar sesión</span>
            </Button>
            <Button className="panel-button register">
              <PersonAddIcon className="icon" />
              <span>Registrarse</span>
            </Button>
          </Paper>
        </Popover>
      </Toolbar>
    </AppBar>
    </>
  );
}

export default Menubar;