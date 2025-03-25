import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Componentes
import Albuns from "./components/album/album.jsx";
import Home from "./components/home/home.jsx";
import Login from "./components/loginApp/login/login.jsx";
import Recuperar from "./components/loginApp/recuperar/recuperar.jsx";
import Registro from "./components/loginApp/registro/registro.jsx";
import User from "./components/user-App/userApp.jsx";
import WelcomeApp from "./components/welcome/welcomeApp.jsx";

function App() {
  return (
    <div className="global-bg">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeApp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/registro" element={<Registro />} />
          <Route path="/login/recuperar" element={<Recuperar />} />

          <Route path="/home/user" element={<User/>} />
          <Route path="/home/albuns" element={<Albuns />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
