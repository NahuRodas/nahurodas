import './SobreMi.scss'
import ProfilePicture from '../../assets/foto_perfil2.PNG'

const SobreMi = () => {
    return(
        <div className="contenedor">
            <div className="contenedor-sobre-mi">
                <div className="sobre-mi">
                    <h2>Hola, </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Molestias amet laboriosam, quo porro quis fugit omnis 
                        cumque dignissimos rem quibusdam?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Molestias amet laboriosam, quo porro quis fugit omnis 
                        cumque dignissimos rem quibusdam?</p>
                </div>
                <div className="profile-picture">
                    <div className="pp-bg">
                    
                </div>
                <div className="pp-img">
                    <img src={ ProfilePicture } alt="Foto de perfil" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;