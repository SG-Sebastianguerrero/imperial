import '../default.css';
import './Login.css';
import {Component} from "react"
/* import {Link} from 'react-router-dom' */

/* here i could to create the preloader */
class Login extends Component{
    render(){
        return(
            <div>
                <section className='login'>
                    <div className='text'>Press logIn</div>
                    <a href="/dashboard">Entrar al menu</a>
                </section>
            </div>
        )
    }
}
export default Login