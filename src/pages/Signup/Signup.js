import '../default.css';
import './Signup.css';
import {Component} from "react"

class Signup extends Component{
    render(){
        return(
            <div>
                <section className='login'>
                    <div className='text'>Register</div>
                    <a href="/dashboard">Entrar al menu</a>
                </section>
            </div>
        )
    }
}
export default Signup