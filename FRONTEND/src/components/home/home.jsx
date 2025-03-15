import React, { useEffect } from 'react';
import Menubar from '../menu-bar/menu-bar';
import SideBar from '../side-bar/side-bar';
import './home.css';



const Home = () => {

  useEffect(() => {
    // Agregamos la clase fade-in al body
    document.body.classList.add("fade-in");

    // Limpiamos la clase cuando el componente se desmonte (opcional)
    return () => {
      document.body.classList.remove("fade-in");
    };
  }, []);

  return (
    <>

      <Menubar />
     
      <SideBar/>
      <div className="content fade-in">
   

      </div>

    </>
  );
};

export default Home;
