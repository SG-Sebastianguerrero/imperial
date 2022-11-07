import '../default.css';
import './AppointmentsRequest.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"

class AppointmentsRequest extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className="internalSection medicalHistory">
                    <h1 className="text">Solicitud de Citas</h1>
                </section>
            </div>
        )
    }
}
export default AppointmentsRequest