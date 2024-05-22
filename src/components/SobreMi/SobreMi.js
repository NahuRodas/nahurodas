import './SobreMi.scss'
import ProfilePicture from '../../assets/foto_perfil2.PNG'

const SobreMi = () => {
    return(
        <div className="contenedor">
            <div className="sobre-mi">
                <div className="contenido-sobre-mi">
                    <h2>Un poco sobre mi </h2>
                    <p>Soy Nahuel, tengo 26 años y resido en Hurlingham, Zona Oeste. Poseo conocimientos en <span>front-end</span> y  
                        <span> back-end</span>, como así tambien en <span>diseño web</span> y <span>desarrollo de software</span>.</p>
                    <p>Graduado de <span>Técnico en informática</span> en la escuela secundaria 
                        Sagrado corazon de Jesús, Hurlingham, Buenos Aires, Argentina. 
                        Y actualmente cursando <span>Ingenieria en Sistemas de la Información</span> en 
                        la UTN, Argentina.</p>
                </div>
            </div>
            <div className="profile-picture">
                <div className="pp-bg">                   
                </div>
                <div className="bg">                   
                </div>
                <div className="pp-img">
                    <img src={ ProfilePicture } alt="Foto de perfil " />
                </div>
            </div>
        </div>
    )
}

export default SobreMi;
