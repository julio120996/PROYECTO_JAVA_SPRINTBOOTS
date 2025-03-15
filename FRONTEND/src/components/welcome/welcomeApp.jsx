import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SplitText from "./SplitText.jsx";
import "./welcomeApp.css"; // Importamos los estilos externos

const WelcomeApp = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeToBlack, setFadeToBlack] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("hidden-home");

    setTimeout(() => {
      setAnimationComplete(true);

      setTimeout(() => {
        setFadeOut(true);

        setTimeout(() => {
          setFadeToBlack(true); // Oscurecemos la pantalla antes de redirigir

          setTimeout(() => {
            document.body.classList.remove("hidden-home");
            navigate("/home");
          }, 1000);
        }, 500); // Esperamos 0.5s antes de oscurecer
      }, 1500);
    }, 2500);
  }, [navigate]);

  return (
    <div className={`transition-container ${animationComplete ? "black-bg" : ""} ${fadeOut ? "fade-out" : ""} ${fadeToBlack ? "fade-to-black" : ""}`}>
      <div className="circle-animation"></div>
      <SplitText 
        text="HELLO"
        className={`text ${animationComplete ? "text-white" : "text-black"}`}
      />
    </div>
  );
};

export default WelcomeApp;
