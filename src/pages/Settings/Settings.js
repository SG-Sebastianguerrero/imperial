import '../default.css';
import './Settings.css';
import Navbar from '../../components/Navbar/Navbar';
import {Component} from "react"
import { mdiAccountCircle } from '@mdi/js';
import Icon from '@mdi/react'

class Settings extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <section className="internalSection medicalHistory">
                    <div className="filter-container">
                        <Icon path={mdiAccountCircle}
                            size={5}
                            />
                            <div className='w-full pb-6'>
                                <label className="fontSubtitle">Información Personal</label>
                            </div>
                            <div className='w-full pb-4'>
                                <input type="text" placeholder='Nombre' className="w-full styleBox"></input>
                            </div>      
                            <div className='w-full pb-4'>
                                <input type="text" placeholder='Cédula' className='w-full styleBox'></input>
                            </div>
                            <div className='w-full pb-4'>
                                <input type="text" className="w-full styleBox" placeholder='Fecha de Expedición Cédula: DD/MM/YYYY'></input>
                            </div>
                            <div className='w-full pb-4'>
                                <input type="email" placeholder='Correo' className="w-full styleBox"/>
                            </div>
                            <div className='w-full pb-4'>
                                <input type="password" placeholder='Cambiar Contraseña' className="w-full styleBox"/>
                            </div>
                            <div className='w-full pb-6'>
                                <label className='font'>Para cambiar tu contraseña te enviaremos un enlace de restablecimiento a tu correo</label>
                            </div>
                            <div className='w-full pb-4'>
                                <div className='delete-account styleBox w-1/4'>
                                    Eliminar Cuenta
                                </div>
                            </div>
                            <div className='w-full pb-6'>
                                <label className='font'>Al eliminar tu cuenta se eliminará la Información asociada a la aplicación, no a tu historial médico </label>
                            </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Settings