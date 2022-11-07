import '../default.css';
import './Login.css';
import PreLoader from '../../components/PreLoader/PreLoader.js'
/* import { withRouter } from "react-router-dom"; */

function Login (){
    const isAuthorized = () => {

        /* this.props.history.push("/dashboard"); */
        window.location.replace("/dashboard");
        /* redirect("/dashboard") */
        console.log("you will be redirected")
    }

    return(
        <section className='login'>
            <PreLoader/>
            <aside className='loginHero'>
                <div className='circleBackContainer'>
                    <img id="circleBack" src="assets/onBoarding/circleBack.png" alt="circle pattern"></img>
                </div>
                <div className='logoContainer'>
                    <img id="imperialLogo" src="assets/imperialLogo.png" alt="imperial logo"></img>
                    <p id="heroDescription">Una clínica integral</p>
                    <p className='pImperial'>IMPERIAL</p>
                </div>
            </aside>
            <div className='form'>
                <h1 className='formText'>Inicio de sesión</h1>


                <label>Correo</label>
                <input className='formInput' type="text"></input>

                <label>Contraseña</label>
                <input className='formInput' type="password"></input>

                <a className='formForgotPassword' href="/">¿Olvidaste tu contraseña?</a>
                
                <button className='btnForm formText' onClick={isAuthorized}>
                    Iniciar sesión
                </button>
                
                <div className='alternativeLogin'>
                    <p>o</p>
                    <button className='btnAlternative'>
                        <img id="imperialLogo" src="assets/onBoarding/gLogo.png" alt="Google logo"></img>
                        Iniciar sesión con Google
                    </button>
                    <button className='btnAlternative'>
                        <img id="imperialLogo" src="assets/onBoarding/fLogo.png" alt="Facebook logo"></img>
                        Iniciar sesión con Facebook
                    </button>
                </div>

                <span className='formText'>
                    ¿No tienes cuenta? <a href="/signup"> Regístrate </a>
                </span>
            </div>
        </section>
    )
    
}
export default Login