import "../default.css";
import "./Login.css";
import PreLoader from "../../components/PreLoader/PreLoader.js";
import { useNavigate } from "react-router-dom";
/* import { withRouter } from "react-router-dom"; */

function Login() {
  const Navigate = useNavigate();

  const IsAuthorized = () => {
    try {
      var username = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var errors = document.getElementById("errors");
      errors.style.display = "none";

      if (username === "root" && password === "root") {
        /* window.location.replace("/dashboard"); */
        Navigate("/dashboard");
      } else {
        errors.style.display = "block";
        errors.innerText = "Correo o contraseña incorrectos";
        /*  alert("the given data was invalid"); */
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="login">
      <PreLoader />
      <aside className="loginHero">
        <div className="circleBackContainer">
          <img
            id="circleBack"
            src="assets/onBoarding/circleBack.png"
            alt="circle pattern"
          ></img>
        </div>
        <div className="logoContainer">
          <img
            id="imperialLogo"
            src="assets/imperialLogo.png"
            alt="imperial logo"
          ></img>
          <p id="heroDescription">Una clínica integral</p>
          <p className="pImperial">IMPERIAL</p>
        </div>
      </aside>
      <div className="form">
        <h1 className="formText">Inicio de sesión</h1>
        <span id="errors"></span>
        <label>Correo</label>
        <input id="email" className="formInput" type="text" required></input>

        <label>Contraseña</label>
        <input
          id="password"
          className="formInput"
          type="password"
          required
        ></input>

        <a className="formForgotPassword links" href="/ForgotPassword">
          ¿Olvidaste tu contraseña?
        </a>

        <button className="btnForm formText" onClick={IsAuthorized}>
          Iniciar sesión
        </button>

        <div className="alternativeLogin">
          <p>o</p>
          <button className="btnAlternative">
            <img
              id="imperialLogo"
              src="assets/onBoarding/gLogo.png"
              alt="Google logo"
            ></img>
            Iniciar sesión con Google
          </button>
          <button className="btnAlternative">
            <img
              id="imperialLogo"
              src="assets/onBoarding/fLogo.png"
              alt="Facebook logo"
            ></img>
            Iniciar sesión con Facebook
          </button>
        </div>

        <span className="formText">
          ¿No tienes cuenta?&nbsp;
          <a className="links" href="/signup">
            Regístrate
          </a>
        </span>
      </div>
    </section>
  );
}
export default Login;
