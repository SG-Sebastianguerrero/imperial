import '../default.css';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className='home'>
                    <div className='text'>Imperial</div>
                </section>
            </div>
        )
    }
}
export default Home