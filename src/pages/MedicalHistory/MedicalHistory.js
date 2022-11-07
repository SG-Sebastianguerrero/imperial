import '../default.css';
import './MedicalHistory.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"

class MedicalHistory extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className="internalSection medicalHistory">
                    <h1 className="text">Historial Clínico</h1>
                </section>
            </div>
        )
    }
}
export default MedicalHistory