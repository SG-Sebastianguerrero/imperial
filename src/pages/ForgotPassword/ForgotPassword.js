import "../default.css";
import "./ForgotPassword.css";

function ForgotPassword() {
  const sendEmail = () => {
    var emailInput = document.getElementById("emailInput").value;
    var sended = document.getElementById("sended");

    if (emailInput !== "") {
      sended.style.display = "flex";
      sended.style.background = "aquamarine";
      sended.style.color = "black";
      sended.innerText = "Se ha enviado a tu correo";
    } else {
      sended.style.color = "white";
      sended.style.background = "lightcoral";
      sended.style.display = "flex";
      sended.innerText = "Ingresa un correo válido";
    }
  };

  return (
    <div className="content">
      <section className="ForgotPassword">
        <div className="phraseContainer">
          <div className="keyContainer">
            <svg
              className="formIcon"
              id="key"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zm40-176c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z" />
            </svg>
          </div>
          <h1> ¿ Olvidaste contraseña ?</h1>
          <p>
            Introduce el correo con el que accedes a Imperial, en unos minutos
            recibirás un enlace de restablecimiento para realizar el cambio.
          </p>
        </div>
        <span id="sended"></span>
        <div className="envelopeContainer">
          <svg
            className="formIcon"
            id="envelope"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176V384c0 35.3 28.7 64 64 64H360.2C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336c0-79.5-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z" />
          </svg>
          <input
            id="emailInput"
            type="text"
            placeholder="Escribe tu correo"
          ></input>
          <button onClick={sendEmail}>Envíar</button>
        </div>
      </section>
    </div>
  );
}
export default ForgotPassword;
