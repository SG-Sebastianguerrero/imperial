import "../default.css";
import "./MedicalAppointments.css";
import Navbar from "../../components/Navbar/Navbar";
import { Component } from "react";

class MedicalAppointments extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <section className="internalSection medicalHistory">
          <h1 className="text">Citas Medicas</h1>
          {/* <button className="buttonAppointment"> */}
          <a className="buttonAppointment" href="/AppointmentsRequest">
            Solicitud de citas +
          </a>
          {/* </button> */}

          <div className="card">
            <div className="trashContainer">
              <button className="deleteContainer">Cancelar</button>
            </div>
            <span>Fecha: 10 / 10 / 2022</span>
            <span>Paciente: Carolina Romero</span>
            <span>Especialización: Pediatría</span>
            <span>Ubicación: Virtual</span>
          </div>
          <div className="card">
            <div className="trashContainer">
              <button className="deleteContainer">Cancelar</button>
            </div>
            <span>Fecha: 10 / 10 / 2022</span>
            <span>Paciente: Carolina Romero</span>
            <span>Especialización: Pediatría</span>
            <span>Ubicación: Virtual</span>
          </div>
          <div className="card">
            <div className="trashContainer">
              <button className="deleteContainer">Cancelar</button>
            </div>
            <span>Fecha: 10 / 10 / 2022</span>
            <span>Paciente: Carolina Romero</span>
            <span>Especialización: Pediatría</span>
            <span>Ubicación: Virtual</span>
          </div>
          <button className="buttonAppointment cancel">Cancelar</button>
        </section>
      </div>
    );
  }
}
export default MedicalAppointments;
