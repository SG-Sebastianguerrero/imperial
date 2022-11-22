import "../default.css";
import "./AppointmentsRequest.css";
import Navbar from "../../components/Navbar/Navbar";
import { Component } from "react";

class AppointmentsRequest extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <section className="internalSection medicalHistory">
          <div className="filter-container">
            <label className="styleTitle fijar text">Solicitud de Citas</label>
            <div className="w-full">
              <label className="fontSubtitle">Beneficiario</label>
            </div>
            <div className="w-full pb-4">
              <select name="select" className="w-full styleBox">
                <option value="value1" selected>
                  Seleccionar
                </option>
                <option value="value2">Maria Alvarez Lopez</option>
                <option value="value3">Geraldine Machado Alvarez</option>
                <option value="value4">Carlos Cortes Cruz</option>
              </select>
            </div>
            <div className="w-full">
              <label className="fontSubtitle">Especialista</label>
            </div>
            <div className="w-full pb-4">
              <select name="select" className="w-full styleBox">
                <option value="value1" selected>
                  Seleccionar
                </option>
                <option value="value2">Obstetra. Mario Alcantara</option>
                <option value="value3">Oncologa. Ximena Zapata</option>
                <option value="value4">Value 2</option>
                <option value="value5">Value 3</option>
              </select>
            </div>
            <div className="w-full">
              <label className="fontSubtitle">Ubicación</label>
            </div>
            <div className="w-full pb-4">
              <select name="select" className="w-full styleBox">
                <option value="value1" selected>
                  Seleccionar
                </option>
                <option value="value2">Av. 68 Sede Principal</option>
                <option value="value3">Av. Primero de Mayo</option>
                <option value="value4">Calle 94</option>
                <option value="value5">Suba Calle 139</option>
              </select>
            </div>
            <div className="w-full">
              <label className="fontSubtitle">Fecha</label>
            </div>
            <div>
              <input type="date" className="w-48"></input>
            </div>
            <div className="flex w-full">
              <div className="w-1/2 p-8">
                <a
                  className="btnForm3 fontButton cancelBtnAppointments"
                  href="/MedicalAppointments"
                >
                  Cancelar
                </a>
                {/* <button className="btnForm3 fontButton">Cancelar</button> */}
              </div>
              <div className="w-1/2 p-8">
                <button className="btnForm3 fontButton">Confirmar</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default AppointmentsRequest;
