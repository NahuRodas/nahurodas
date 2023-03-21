import './Contacto.scss'

let     nombre = document.getElementById('nombre'),
        email = document.getElementById('email'),
        mensaje = document.getElementById('mensaje');


const enviarMensaje  = e => {
  e.preventDefault();
  window.Email.send({
            SecureToken : "2d1f208f-5a22-4a3b-befb-8cacd7388b28",
            To : 'cesarnrodas@gmail.com',
            From : 'cesarnrodas@gmail.com',
            Subject :"Mensaje de " + nombre.value + " desde página web.",
            Body : "Email: " + email.value + " | Mensaje: " + mensaje.value
        }).then(
          alert('Gracias por contactarme, respondere lo mas rápido posible.')
        );
}

const Contacto = () => {
    return (
      <div className="contenedor-contacto">
        <div className="contacto">
          <form class="formulario" method='POST'>
            <h2>Déjame un mensaje</h2>  
            <input class="input-contacto " type="text" name="nombre" id="nombre" placeholder="Nombre. . . " required /><br />
            <input class="input-contacto " type="email" name="email" id="email" placeholder="Email. . . " required /><br />
            <textarea class="input-contacto " name="mensaje" id="mensaje" rows="10" autocapitalize="sentences" placeholder="Mensaje. . . " maxlength="1000" required></textarea><br />
            <div className="div">
              <button class="btn-enviar" id="btn-enviar" type="submit" onClick={ enviarMensaje } >Enviar</button><br />
            </div>
          </form>
        </div>
        <div class="contacto">
          <div class="mas-contactos">
            <h2>Otras formas de contactarme</h2>
            <div class="info-contacto">
                <i class='bx bx-envelope'></i>
                <a href="mailto:arnold.cole@example.com"><span>cesarnrodas@gmail.com</span></a>
            </div>
            <div class="info-contacto">
                <i class='bx bx-phone' ></i>
                <span>(+54)11 3928-2419</span>
            </div>
            <div class="info-contacto">
                <i class='bx bxl-discord-alt'></i>
                <span>Call me Nahu#7423</span>
            </div>
            <div class="info-contacto">
                <i class='bx bxl-linkedin-square' ></i>
                <span>@CesarRodas</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contacto