import '../default.css';
import './MedicalHistory.css';
import {Component} from "react"
import Navbar from '../../components/Navbar/Navbar';

class MedicalHistory extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className='login'>
                    <div className='text'>medicalHistory</div>
                    <a href="/dashboard">volver</a>
                </section>
            </div>
        )
    }
}
export default MedicalHistory