import '../default.css';
import './Calling.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"

class Calling extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className="internalSection">
                    <div className="filter-container background-body">
                        <div className='w-full grid grid-cols-1 gap-8 header'>
                            <div className='w-full'>
                                Funcionando    
                            </div>
                            <div className='w-full'>
                                Funcionando    
                            </div>
                            <div className='w-full'>
                                Funcionando    
                            </div>
                        </div>
                        
                    </div>    
                    
                </section>
            </div>
        );
    }
}
export default Calling;