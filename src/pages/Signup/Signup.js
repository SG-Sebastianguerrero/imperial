import '../default.css';
import './Signup.css';
import {Component} from "react"
import PreLoader from '../../components/PreLoader/PreLoader.js'

class Signup extends Component{
    render(){
        return(
            <section className='login'>
                <PreLoader/>
                <aside className='loginHero'>
                    <div className='circleBackContainer'>
                        <img id="circleBack" src="assets/onBoarding/circleBack.png" alt="profile"></img>
                    </div>
                    <div className='logoContainer'>
                        <img id="imperialLogo" src="assets/imperialLogo.png" alt="profile"></img>
                        <p id="heroDescription">Una clínica integral</p>
                        <p className='pImperial'>IMPERIAL</p>
                    </div>
                </aside>
                <div className='form'>
                    <h1 className='formText'>Regístrate</h1>
                    <label>Nombre Completo</label>
                    <input className='formInput' type="text"></input>

                    <label>Correo</label>
                    <input className='formInput' type="text"></input>

                    <label>Contraseña</label>
                    <input className='formInput' type="password"></input>

                    <label>Confirmar contraseña</label>
                    <input className='formInput' type="password"></input>

                    <p>Al registrarte aceptas nuestros <a href="/">términos y condiciones</a></p>
                    <button className='btnForm formText'>
                        Regístrate
                    </button>


                    <div className='alternativeLogin'>
                            <p>o</p>
                            <button className='btnAlternative'>
                                <img id="imperialLogo" src="assets/onBoarding/gLogo.png" alt="Google logo"></img>
                                Registrate con Google
                            </button>
                            <button className='btnAlternative'>
                                <img id="imperialLogo" src="assets/onBoarding/fLogo.png" alt="Facebook logo"></img>
                                Registrate con Facebook
                            </button>
                    </div>
                    <span className='redirectLogin'>
                        ¿Ya tienes cuenta? <a href="/"> Inicia sesión </a>
                    </span>
                </div>
         </section>
        )
    }
}
export default Signup