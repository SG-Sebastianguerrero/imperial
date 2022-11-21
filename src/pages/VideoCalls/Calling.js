import '../default.css';
import './Calling.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"
import Icon from '@mdi/react'
import { mdiAccountPlus } from '@mdi/js';
import { mdiKeyboardReturn } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';
import { Link } from "react-router-dom";

class Calling extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className="internalSection">
                    <div className="filter-container-calling background-body">
                        
                            <div className='w-full header'>
                                <div className='flex'>
                                    <div className='w-1/6 '>
                                        <Link to="/VideoCalls">
                                            <Icon path={mdiKeyboardReturn}
                                                size={2}
                                                className='icon icon-return'/>
                                        </Link>
                                        
                                    </div>
                                    <div className='w-4/6'>
                                    </div>
                                    <div className='w-1/6'>
                                        <Icon path={mdiAccountPlus}
                                            size={2} 
                                            className='icon icon-user'/>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full body-calling'>
                                <div className='flex'>
                                    <div className='w-1/6 '>
                                    </div>
                                    <div className='w-4/6'>
                                        <div className='grid grid-cols3'>
                                            <div>
                                                <Icon path={mdiAccountCircle}
                                                    size={8}
                                                    className='icon icon-user big-icon '/>        
                                            </div>
                                        </div>                                        
                                    </div>
                                    <div className='w-1/6'>
                                    </div>
                                </div>                                
                            </div>
                            <div className='w-full footer-calling footer'>
                                <div className='flex'>
                                    <div className='w-1/3 '>
                                    </div>
                                    <div className='w-1/3 down-elements fa-lg'>
                                        <i className="fa-solid fa-video pull-apart-elemts fa-lg"></i> 
                                        <i className="fa-solid fa-microphone pull-apart-elemts fa-lg"></i>
                                        <label className='pull-apart-elemts'>Llamada en curso</label>   
                                        <i className="fa-solid fa-phone pull-apart-elemts fa-lg"></i>                                   
                                    </div>
                                    <div className='w-1/3'>
                                    </div>
                                </div>   
                            </div>
                    </div>                        
                </section>
            </div>
        );
    }
}
export default Calling;