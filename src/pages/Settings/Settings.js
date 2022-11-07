import '../default.css';
import './Settings.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"

class Settings extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className="internalSection medicalHistory">
                    <h1 className="text">Configuración</h1>
                </section>
            </div>
        )
    }
}
export default Settings