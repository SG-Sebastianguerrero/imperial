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
                    <div className="filter-container">
                        <h1 className="text fontSubtitle">Videollamadas</h1>
                        <div>
                            <i class="fa-solid fa-arrows-rotate fa-2xl"></i>
                        </div>
                        <div className='w-full text-center'>
                            <label>Esperando a que uno de tus contactos</label>
                        </div>
                        <div className='dark-background w-5/6 h-48'>
                            <div className='w-full text-center'>
                                <label className='ligth-font'>Invitar con:</label>
                            </div>
                            <div class="grid grid-cols-3">
                                <div className='w-full'>
                                    <button className="btnForm">
                                        <div className="ml-1">
                                            <i class="fa-solid fa-copy fa-lg space-between" ></i> Enlace
                                        </div>
                                    </button> 
                                </div>
                                <div className='w-full'>
                                    <button className="btnForm">
                                        <div>
                                            <i class="fa-brands fa-google fa-2xl space-between"></i>
                                            Google
                                        </div>
                                    </button> 
                                </div>
                                <div className='w-full'>
                                    <button className="btnForm">
                                        <div>
                                            <i class="fa-brands fa-facebook fa-2xl space-between"></i>
                                            facebook
                                        </div>
                                    </button> 
                                </div>

                                <div className='w-full'>
                                    <button className="btnForm">
                                        <div>
                                            <i class="fa-solid fa-envelope fa-2xl space-between"></i>
                                            Correo
                                        </div>
                                    </button> 
                                </div>
                                <div className='w-full'>
                                    <button className="btnForm">
                                        <div>
                                            <i class="fa-brands fa-whatsapp fa-2xl space-between"></i>
                                            Whatsapp
                                        </div>
                                    </button> 
                                </div>
                                <div className='w-full'>
                                    <button className="btnForm">
                                        <div>
                                            <i class="fa-brands fa-facebook-messenger fa-2xl space-between"></i>
                                            Messenger
                                        </div>
                                    </button> 
                                </div>
                            </div>
                        </div>
                        <div className='w-full text-center'>
                            <label>Cuando alguno de los contactos que invitaste ingresé al enlace, la llamada empezará automáticamente.</label>
                        </div>
                        <div className='w-4/5 backgrounlight'>
                            <button type="submit" className='space-between'><i class="fa fa-search"></i></button>
                            <input type="text" placeholder="search"  className='w-5/6 borderInput text-left'/>
                        </div>
                        <div className='w-full'>
                            <div class="grid grid-cols-3 dark-background">
                                <div className='centerElement'>
                                    <i class="fa-solid fa-user fa-lg"></i>
                                </div>
                                <div className='centerElement'>
                                    <label className='ligth-font text-center'>Juan Machado</label>
                                </div>
                                <div>
                                    <button className="btnForm2 fontButton centerElement">Invitar</button> 
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div class="grid grid-cols-3 dark-background">
                                <div className='centerElement'>
                                    <i class="fa-solid fa-user fa-lg"></i>
                                </div>
                                <div className='centerElement'>
                                    <label className='ligth-font text-center'>Manuel Vasquez</label>
                                </div>
                                <div>
                                    <button className="btnForm2 fontButton centerElement">Invitar</button> 
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div class="grid grid-cols-3 dark-background">
                                <div className='centerElement'>
                                    <i class="fa-solid fa-user fa-lg"></i>
                                </div>
                                <div className='centerElement'>
                                    <label className='ligth-font text-center'>Sandra Torrado</label>
                                </div>
                                <div>
                                    <button className="btnForm2 fontButton centerElement">Invitar</button> 
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </section>
            </div>
        )
    }
}
export default VideoCalls