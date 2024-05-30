import './Proyectos.scss'
import Proyecto1 from '../../assets/proyecto1.PNG'
import Proyecto2 from '../../assets/proyecto2.PNG'
import Proyecto3 from '../../assets/proyecto3.PNG'
import Proyecto4 from '../../assets/proyecto4.PNG'
import Proyecto5 from '../../assets/proyecto5.PNG'

const Proyectos = () => {
    return (
      <div className="contenedor-proyectos">
        <div className="grilla-proyectos">
          <div className="proyecto">
           <a href="https://chimmievtuber.netlify.app/" rel="noreferrer" target="_blank"><img src={ Proyecto1 } alt="Proyecto 1" /></a> 
            <div className="proyecto-info">
              <h4> Libro virtual </h4>
              <p> Página web creada en Vue.js que funciona como libro virtual,
                 cuenta con animaciones de pasaje de páginas.</p>
              <p> Conocimientos utilizados: Vue.js - JavaScript - HTML - CSS - Git</p>
            </div>
          </div>
          <div className="proyecto">
            <a href="https://nahurodas.github.io/ToDoList/" rel="noreferrer" target="_blank">
              <img src={ Proyecto2 } alt="Proyecto 2" /></a>
            <div className="proyecto-info">
              <h4> Lista de tareas </h4>
              <p> Simple lista de tareas donde se puede agregar tareas, eliminarlas y/o
                marcarlas como "Realizadas".
              </p>
              <p> Conocimientos utilizados: JavaScript - HTML - CSS - Git</p>
            </div>
          </div>
          <div className="proyecto">
             <a href="https://nahurodas.github.io/miniGames/" rel="noreferrer" target="_blank" > 
             <img src={ Proyecto3 } alt="Proyecto 3" />
             </a> 
            <div className="proyecto-info">
              <h4>Mini Games</h4>
              <p>Una coleccion de minijuegos mayormente desarrollados en JavaScript.</p>
            </div>
          </div>
          <div className="proyecto">
            <a href="https://nahurodas.github.io/LoginFormulario/" rel="noreferrer" target="_blank">
              <img src={ Proyecto4 } alt="Proyecto 4" />
            </a>
            <div className="proyecto-info">
              <h4>Login / Resgister</h4>
              <p>Simple formulario de inicio de sesión y registro.</p>
              <p> Conocimientos utilizados: JavaScript - HTML - CSS - Git</p>
            </div>
          </div>
          <div className="proyecto">
            <a href="https://crypthor.netlify.app/" rel="noreferrer" target="_blank"><img src={ Proyecto5 } alt="Proyecto 5" /></a>
            <div className="proyecto-info">
              <h4>Crypthor</h4>
              <p>Crypto currency traker, página que sigue el precio (en dolares), valor en bolsa y cantidad activo de las 
                100 cryptomonedas más populares utilizando la API CoinGeko y la libreria axios.js.
              </p>
              <p> Conocimientos utilizados: React - JavaScript - HTML - CSS - Git</p>
            </div>
          </div>
          <div className="inactive">
            {/* <a href="#"  target="_blank" rel="noreferrer"> */}
              <img src="https://via.placeholder.com/600x400/0a2647/F0EB8D?text=Coming+soon" alt="Proyecto 6" />
            {/* </a> */}
            <div className="proyecto-info">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          
        </div>
      </div>
    ) 
}

export default Proyectos