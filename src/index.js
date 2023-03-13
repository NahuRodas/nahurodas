import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Curriculum from './components/Curriculum';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Home />
  </React.StrictMode>
);


