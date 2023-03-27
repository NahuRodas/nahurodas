import 'animate.css'
import './Home.scss'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return (
      <div className="home">
        <div className="contenedor">
          <h1 className='main-title'>
            <div className= 'first-name'>
              <div className="title first-letter">C</div>
              <div className="title">e</div>
              <div className="title">s</div>
              <div className="title">a</div>
              <div className="title">r</div>
            </div>
            <div className="mid-name">
              <div className="title first-letter">N</div>
              <div className="title">a</div>
              <div className="title">h</div>
              <div className="title">u</div>
              <div className="title">e</div>
              <div className="title">l</div>
            </div>
            <div className="last-name">
              <div className="title first-letter">R</div>
              <div className="title">o</div>
              <div className="title">d</div>
              <div className="title">a</div>
              <div className="title">s</div>
            </div>
          </h1>
        <p className='subtitle'>Desarrolador Web - Front end - Back end - Diseñador Web  </p>
        <NavLink className="contacto-home" exact='true' to='/Contacto'>
              <button className='btn-contacto-home'><span>¡Contactame!</span></button>
        </NavLink>
        </div>
      </div>
    )
  }
  
  export default Home