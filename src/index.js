import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Curriculum from './components/Curriculum';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <Curriculum />
    <Proyectos />
    <Contacto />
    <Footer />
  </React.StrictMode>
);


