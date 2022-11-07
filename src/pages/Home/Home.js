import '../default.css';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className="internalSection home">
                    <h1 className="text">Inicio</h1>
                </section>
            </div>
        )
    }
}
export default Home