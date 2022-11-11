import "../default.css";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <section className="internalSection">
          <div className="hlfcircle-gradient"></div>
          <h1 className="text">Bienvenid@ a Imperial</h1>
          <img
            className="hlfcircle-gradient"
            src="assets/hlfcircle-gradient.png"
            alt="Gradient imperial"
          ></img>
          <div className="events">
            <p className="events-title">Eventos Próximos</p>
            <div className="event-container">
              <div className="calendar">
                <span className="calendar-month">Junio</span> <br></br>
                <span className="calendar-number">24</span>
              </div>
              <div className="event-details">
                <span>Examen de Oftalmología</span>
                <span>Doctor: Daniel Lievano</span>
                <span>Hora: 10:24 am</span>
              </div>
              <img
                src="assets/icons/info-icon.svg"
                alt="information icon"
                className="infoIcon"
              ></img>
            </div>
          </div>

          <div className="events">
            <p className="events-title">Resultado de exámenes</p>
            <div className="event-container">
              <div className="calendar">
                <span className="calendar-month">Junio</span> <br></br>
                <span className="calendar-number">02</span>
              </div>
              <div className="event-details">
                <span>Ecografia</span>
                <span>Los resultados están en</span>
                <span>el correo registrado.</span>
              </div>
              <img
                src="assets/icons/info-icon.svg"
                alt="information icon"
                className="infoIcon"
              ></img>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
