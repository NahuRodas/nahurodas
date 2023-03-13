import React, { Component } from 'react'
import "../styles/NavBar.scss"

export class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className="container">
          <div className="hide-menu">
            <button className='btn hide-menu-btn'><i class='bx bx-menu'></i></button>
          </div>
          <div className="navbar-home">
            <button className='btn btn-home' to='/'><i class='bx bxs-home' ></i><span>HOME</span></button>
          </div>
          <div className='menu'>
            <div className="navbar-btn">
              <button className='btn btn-sobre-mi'><i class='bx bxs-user' ></i><span>Sobre mi</span></button>
            </div>
            <div className="navbar-btn">
              <button className='btn btn-curriculum'><i class='bx bxs-file' ></i><span>Curriculum</span></button>
            </div>
            <div className="navbar-btn">
              <button className='btn btn-proyectos'><i class='bx bxs-terminal'></i><span>Proyectos</span></button>
            </div>
            <div className="navbar-btn">
              <button className='btn btn-contacto'><i class='bx bxs-envelope' ></i><span>Contacto</span></button>
            </div>
            <div className="dark-mode">
              <div className="navbar-btn">
                <button className='btn-toggle-dark-mode'><i class='bx bxs-moon'></i></button>
              </div>
              <div className="navbar-btn">
                <button className='btn-toggle-light-mode'><i class='bx bxs-sun' ></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar