import '../default.css';
import './VideoCalls.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"

class VideoCalls extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className="internalSection medicalHistory">
                    <h1 className="text">Video llamadas</h1>
                </section>
            </div>
        )
    }
}
export default VideoCalls