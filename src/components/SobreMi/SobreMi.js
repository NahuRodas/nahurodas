import './SobreMi.scss'
import ProfilePicture from '../../assets/foto_perfil2.PNG'

const SobreMi = () => {
    return(
        <div className="contenedor">
            <div className="contenedor-sobre-mi">
                <div className="sobre-mi animate__animated animate__bounceInLeft">
                    <div className="contenido-sobre-mi">
                        <h2>¡Hola! </h2>
                        <p>Soy desarrollador web! Poseo conocimientos en <span>front-end</span> y  
                           <span> back-end</span>, como así tambien en <span>diseño web</span> y <span>diseño gráfico</span>.</p>
                        <p>Graduado de <span>Técnico en informática</span> en la escuela secundaria 
                            Sagrado corazon de Jesús, Hurlingham, Buenos Aires, Argentina. 
                            Y actualmente cursando tercer año de <span>Ingenieria en Sistemas de la Información</span> en 
                            la UTN, Argentina.</p>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="pp-bg animate__animated animate__bounceInRight">                   
                    </div>
                    <div className="pp-img">
                        <img className='animate__animated animate__bounceInRight' src={ ProfilePicture } alt="Foto de perfil " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;