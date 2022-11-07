import '../default.css';
import './MedicalAppointments.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"

class MedicalAppointments extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className="internalSection medicalHistory">
                    <h1 className="text">Citas Medicas</h1>
                </section>
            </div>
        )
    }
}
export default MedicalAppointments