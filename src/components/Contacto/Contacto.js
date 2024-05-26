import './Contacto.scss'



const Contacto = () => {

  let     nombre = document.getElementById("nombre"),
                email = document.getElementById("email"),
                mensaje = document.getElementById("mensaje");

  return (
    <div className="contenedor-contacto">
      <div className="contacto">
        <form className="formulario" action='https://api.elasticemail.com/v4/emails/transactional' method='POST'>
          <h2>Déjame un mensaje</h2>  
          <input className="input-contacto " type="text" name="nombre" id="nombre" placeholder="Nombre. . . " required /><br />
          <input className="input-contacto " type="email" name="email" id="email" placeholder="Email. . . " required /><br />
          <textarea className="input-contacto " name="mensaje" id="mensaje" rows="10" autoCapitalize="sentences" placeholder="Mensaje. . . " maxLength="1000" required></textarea><br />
          <div className="div">
            <button className="btn-enviar" id="btn-enviar" type="submit" onClick={ 
                function() {
                window.Email.send({
                      SecureToken : "7559D472C436E656EE5F09ADD7F165E8084406D79877E661CEDB915ACB2D0F647B9502C491A7335E3E8B3F9D14B543F9",
                      To : 'cesarnrodas@gmail.com',
                      From : 'cesarnrodas@gmail.com',
                      Subject :"Mensaje de " + nombre.value + " desde página web.",
                      Body : "Email: " + email.value + " | Mensaje: " + mensaje.value
                  }).then(
                    alert('Gracias por contactarme, respondere lo mas rápido posible.')
                  );
                }
            } >Enviar</button><br />
          </div>
        </form>
      </div>
      <div className="contacto">
        <div className="mas-contactos">
          <h2>Otras formas de contactarme</h2>
          <div className="info-contacto">
              <i className='bx bx-envelope'></i>
              <a href="mailto:arnold.cole@example.com"><span>cesarnrodas@gmail.com</span></a>
          </div>
          <div className="info-contacto">
              <i className='bx bx-phone' ></i>
              <span>(+54)11 3928-2419</span>
          </div>
          <div className="info-contacto">
              <i className='bx bxl-discord-alt'></i>
              <span>Call me Nahu#7423</span>
          </div>
          <div className="info-contacto">
              <i className='bx bxl-linkedin-square' ></i>
              <span>@CesarRodas</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto