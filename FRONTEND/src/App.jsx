import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Albuns from "./components/album/album.jsx";
import Home from "./components/home/home.jsx";
import WelcomeApp from "./components/welcome/welcomeApp.jsx";

function App() {
  return (
   
    
    
    <div className="global-bg"> {/* Clase para mantener el fondo negro */}
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeApp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/albuns" element={<Albuns />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
