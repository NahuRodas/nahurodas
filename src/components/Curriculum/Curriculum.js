import './Curriculum.scss'

const Curriculum = () => {

    return (
      <div className="contenedor-curriculum">
        <div className="grilla-curriculum">
          <div className="particion">
            <h2>Estudios y Experiencia laboral</h2>
            <div className="lista">
              <ul>
                <h3>Estudios</h3>
                <li><span>Técnico en informática personal y profesional</span>, Instituto Sagrado Corazón de Jesus, Buenos Aires, Argentina</li>
                <li><span>Ingenieria en sistemas</span>, UTN, Argentina</li>
                <li><span>Desarrollador web</span>, Argentina programa</li>
                <li><span>Desarrollador web</span>, Udemy Academy</li>
                <h3>Experiencia laboral</h3>
                <li>Area de sistemas, Municipalidad de Hurlingham | Enero 2015 - Junio 2015</li>
                <li>Area de sistemas, Municipalidad de Morón | Junio 2015 - Enero 2016</li>
                <li>Desarrollador web, Freelance | 2020 - Actualidad</li>
              </ul>
            </div>
          </div>
          <div className="particion">
            <h2>Conocimientos</h2>
            <div className="lista conocimientos">
              <ul>
                <h3>Lenguajes</h3>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>C++</li>
                <li>C#</li>
                <li>PHP</li>
                <h3>Frameworks y librerias</h3>
                <li>NodeJS</li>
                <li>React</li>
              </ul>
              <ul>
                <h3>Desarrollo web</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Jason</li>
                <li>Ajax</li>
                <li>MySql</li>
              </ul>
            </div>
          </div>
          <div className="particion">         
              <h2>Habilidades</h2>
            <div className="lista">
              <ul>
              <li>Resolución de problemas</li>
              <li>Facilidad de aprendizaje de nuevas tecnologias</li>
              <li>Liderazgo</li>
              <li>Trabajo en grupo</li>
              <li>Aprendizaje rápido y autonomo</li>
              <li>Profesionalidad y puntualidad</li>
            </ul>
            </div>
          </div>
          <div className="particion">         
              <h2>Extras</h2>
            <div className="lista">
              <ul>
              <li>Nivel de ingles alto</li>
              <li>Microssoft Office</li>
              <li>Photoshop</li>
              <li>After Effects</li>
              <li>Visual Studio Code</li>
              <li>CMD</li>
              <li>Git/GitHub</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Curriculum