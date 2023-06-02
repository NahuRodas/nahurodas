import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import "./NavBar.scss"


const NavBar = () => {

 
  const [Menu, setMenu] = useState(true);

  const menuOff = {
    display: 'none'
  }

  const menuOn = {
    display: 'block'
  }

  const hideMenu = () => {
    if (Menu) {
      console.log("True");
      
    }else{
      console.log("False");
    }
    setMenu(!Menu);
  }

  return (
      <div className='navbar'>
        <div className="contenedor-nav">
          <div className="hide-menu">
            <button className='btn hide-menu-btn' onClick={ hideMenu }><i class='bx bx-menu'></i></button>
          </div>
          <nav className='menu' style={ Menu ?  menuOn : menuOff}>
            <Link className='navbar-home' to='/'>
              <button className='btn btn-home'><i class='bx bxs-home' ></i><span>Inicio</span></button>
            </Link>
            <NavLink className="navbar-btn" exact="true" to="/SobreMi">
              <button className='btn btn-sobre-mi'><i class='bx bxs-user' ></i><span>Sobre mi</span></button>
            </NavLink>
            <NavLink className="navbar-btn" exact='true' to='/Curriculum'>
              <button className='btn btn-curriculum'><i class='bx bxs-file' ></i><span>Curriculum</span></button>
            </NavLink>
            <NavLink className="navbar-btn" exact='true' to='/Proyectos'>
              <button className='btn btn-proyectos'><i class='bx bxs-terminal'></i><span>Proyectos</span></button>
            </NavLink>
            <NavLink className="navbar-btn" exact='true'  to='/Contacto'>
              <button className='btn btn-contacto'><i class='bx bxs-envelope' ></i><span>Contacto</span></button>
            </NavLink>
            <div className="lenguaje">
              <Link className="navbar-lenguage" to={"https://cesarnahuelrodasen.netlify.app/"}>
                <button className='btn-english' >EN</button>
              </Link>
              <Link className="navbar-lenguage active" to={"https://cesarnahuelrodas.netlify.app/"}>
                <button className='btn-spanish' >ES</button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    )
}

export default NavBar