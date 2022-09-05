import '../styles/navbar.css';
import {Component} from "react"

class Navbar extends Component{

    closeToggle(){
        var body = document.querySelector('body'),
            sidebar = body.querySelector('nav');

        sidebar.classList.toggle("close");
    }

    searchBoxActive(){
        var body = document.querySelector('body'),
            sidebar = body.querySelector('nav');
            
        sidebar.classList.remove("close");
    }
    
    modeSwitchClick(){
        var body = document.querySelector('body'),
            modeText = body.querySelector(".mode-text");

        body.classList.toggle("dark");
    
        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
        }else{
            modeText.innerText = "Dark mode";
        }
    }

    render(){
        return(
            <nav className="sidebar close">
                <header>
                    <div className="image-text">
                        <span className="image">
                            {/* <img src="logo.png" alt=""> */}
                        </span>

                        <div className="text logo-text">
                            <span className="name">Imperial</span>
                            <span className="profession">Johan Guerrero</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle' onClick={this.closeToggle}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        <li className="search-box" onClick={this.searchBoxActive}>
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..."></input>
                        </li>

                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="/dashboard">
                                    <i className='bx bx-home-alt icon' ></i>
                                    <span className="text nav-text">Inicio</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/dashboard">
                                    <i className='bx bx-user-circle icon'></i>
                                    <span className="text nav-text">Pacientes</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/dashboard">
                                    <i className='bx bx-buildings icon'></i>
                                    <span className="text nav-text">Sedes</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/dashboard">
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">Resultados</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/dashboard">
                                    <i className='bx bxs-ambulance icon' ></i>
                                    <span className="text nav-text">Remision</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/dashboard">
                                    <i className='bx bx-credit-card icon' ></i>
                                    <span className="text nav-text">Facturación</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/dashboard">
                                    <i className='bx bxs-id-card icon' ></i>
                                    <span className="text nav-text">Datos</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="/dashboard">
                                    <i className='bx bx-cog icon' ></i>
                                    <span className="text nav-text">Configuracion</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a href="/dashboard">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>

                        <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-moon icon moon'></i>
                                <i className='bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">Dark mode</span>

                            <div className="toggle-switch" onClick={this.modeSwitchClick}>
                                <span className="switch"></span>
                            </div>
                        </li>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar