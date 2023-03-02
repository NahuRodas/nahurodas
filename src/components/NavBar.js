import React, { Component } from 'react'
import "../styles/NavBar.scss"

export class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className="container">
          <div className="navbar-btn-menu">
            <button className='btn btn-hide-menu'><i class='bx bx-menu'></i></button>
          </div>
          <div className='menu'>
            <div className="navbar-btn">
            <button className='btn btn-sobre-mi'>Sobre mi</button>
          </div>
          <div className="navbar-btn">
            <button className='btn btn-curriculum'>Curriculum</button>
          </div>
          <div className="navbar-btn">
            <button className='btn btn-proyectos'>Proyectos</button>
          </div>
          <div className="navbar-btn">
            <button className='btn btn-contacto'>Contacto</button>
          </div>
          <div className="dark-mode">
            <div className="navbar-btn">
              <button className='btn-toggle-dark-mode'><i class='bx bx-moon'></i></button>
            </div>
            <div className="navbar-btn">
              <button className='btn-toggle-light-mode'><i class='bx bx-sun' ></i></button>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar