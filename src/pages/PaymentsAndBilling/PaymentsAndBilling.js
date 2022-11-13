import "../default.css";
import "./PaymentsAndBilling.css";
import Navbar from "../../components/Navbar/Navbar";
import React, { useState } from "react";
/* import PaymentMethods from "../PaymentMethods/PaymentMethods"; */
/* import { useNavigate } from "react-router-dom"; */
import { Link } from "react-router-dom";

function PaymentsAndBilling() {
  /* const Navigate = useNavigate(); */
  const toPay = () => {
    //change the buttons appearence
    var payElement = document.getElementById("pay");
    var paidElement = document.getElementById("paid");
    paidElement.classList.toggle("filter-buttons_active", false);
    payElement.classList.toggle("filter-buttons_active", true);
    // show the list requested
    var listAlreadyPaid = document.getElementById("alreadyPaid");
    var ListToPay = document.getElementById("toPay");
    listAlreadyPaid.style.display = "none";
    ListToPay.style.display = "flex";
  };
  const toPaid = () => {
    //change the buttons appearence
    var payElement = document.getElementById("pay");
    var paidElement = document.getElementById("paid");
    payElement.classList.toggle("filter-buttons_active", false);
    paidElement.classList.toggle("filter-buttons_active", true);
    // show the list requested
    var listAlreadyPaid = document.getElementById("alreadyPaid");
    var ListToPay = document.getElementById("toPay");
    listAlreadyPaid.style.display = "flex";
    ListToPay.style.display = "none";
  };
  const makeFilters = () => {
    //change the buttons appearence
    var filterContainer = document.getElementById("filters");
    filterContainer.style.display = "flex";
  };
  const closeFilters = () => {
    //change the buttons appearence
    var filterContainer = document.getElementById("filters");
    filterContainer.style.display = "none";
  };
  const [data1] = useState({
    date: "10/10/2022",
    name: "Pediatría",
    price: "20.000",
    location: "Virtual",
    to: "Carolina Romero",
  });
  const [data2] = useState({
    date: "11/11/2022",
    name: "Especialista oftalmología",
    price: "55.200",
    location: "Av. Caracas # 37-63",
    to: "Ricardo Rodriguez",
  });
  const [data3] = useState({
    date: "12/10/2022",
    name: "Medicina General",
    price: "15.00 0",
    location: "Virtual",
    to: "Sebastian Guerrero",
  });

  return (
    <div>
      <Navbar></Navbar>
      <section className="internalSection paymentsAndBilling">
        <h1 className="text">Pagos y facturas</h1>
        <div className="filter-container">
          <button className="btnForm" onClick={makeFilters}>
            Filtrar
          </button>
          <div id="filters">
            <label className="label-description">Beneficiario</label>
            <select className="filterInputs">
              <option>Carolina Romero</option>
              <option>Ricardo Rodriguez</option>
              <option>Sebastian Guerrero</option>
            </select>
            <label className="label-description">Especialista</label>
            <select className="filterInputs">
              <option>Oftalmología</option>
              <option>Pediatría</option>
              <option>Medicina general</option>
            </select>
            <label className="label-description">Fecha</label>
            <input
              className="filterInputs"
              type="date"
              id="start"
              name="trip-start"
              value="2022-13-11"
              min="2022-01-01"
              max="2040-12-01"
            ></input>
            <button id="filter-cancel" onClick={closeFilters}>
              Cancelar
            </button>
          </div>
          <div className="filter-buttons">
            <button id="pay" className="filter-buttons_active" onClick={toPay}>
              Por Pagar
            </button>
            <button id="paid" className="filter-disabled" onClick={toPaid}>
              Pagado
            </button>
          </div>
          <div id="toPay">
            <div className="card">
              <span>Fecha: 10 / 10 / 2022</span>
              <span>Paciente: Carolina Romero</span>
              <span>Especialización: Pediatría</span>
              <span>Ubicación: Virtual</span>
              <Link
                className="btnToPay"
                to="/PaymentMethods"
                state={{ data: data1 }}
              >
                Pagar
              </Link>
            </div>
            <div className="card">
              <span>Fecha: 11 / 11 / 2022</span>
              <span>Paciente: Ricardo Rodriguez</span>
              <span>Especialización: Especialista oftalmología</span>
              <span>Ubicación: Av. Caracas # 37-63</span>
              <Link
                className="btnToPay"
                to="/PaymentMethods"
                state={{ data: data2 }}
              >
                Pagar
              </Link>
            </div>
            <div className="card">
              <span>Fecha: 12/10/2022</span>
              <span>Paciente: Sebastian Guerrero</span>
              <span>Especialización: Medicina General</span>
              <span>Ubicación: Virtual</span>
              <Link
                className="btnToPay"
                to="/PaymentMethods"
                state={{ data: data3 }}
              >
                Pagar
              </Link>
            </div>
          </div>
          <div id="alreadyPaid">
            <div className="card">
              <span>Fecha: 10 / 10 / 2022</span>
              <span>Paciente: Carolina Romero</span>
              <span>Especialización: Medicina General</span>
              <span>Ubicación: Virtual</span>
              <button className="btnToPay">Enviar por correo</button>
            </div>
            <div className="card">
              <span>Fecha: 10 / 10 / 2022</span>
              <span>Paciente: Carolina Romero</span>
              <span>Especialización: Medicina General</span>
              <span>Ubicación: Virtual</span>
              <button className="btnToPay">Enviar por correo</button>
            </div>
            <div className="card">
              <span>Fecha: 10 / 10 / 2022</span>
              <span>Paciente: Carolina Romero</span>
              <span>Especialización: Medicina General</span>
              <span>Ubicación: Virtual</span>
              <button className="btnToPay">Enviar por correo</button>
            </div>
            <div className="card">
              <span>Fecha: 10 / 10 / 2022</span>
              <span>Paciente: Carolina Romero</span>
              <span>Especialización: Medicina General</span>
              <span>Ubicación: Virtual</span>
              <button className="btnToPay">Enviar por correo</button>
            </div>
            <div className="card">
              <span>Fecha: 10 / 10 / 2022</span>
              <span>Paciente: Carolina Romero</span>
              <span>Especialización: Medicina General</span>
              <span>Ubicación: Virtual</span>
              <button className="btnToPay">Enviar por correo</button>
            </div>
            <div className="card">
              <span>Fecha: 10 / 10 / 2022</span>
              <span>Paciente: Carolina Romero</span>
              <span>Especialización: Medicina General</span>
              <span>Ubicación: Virtual</span>
              <button className="btnToPay">Enviar por correo</button>
            </div>
            <div className="card">
              <span>Fecha: 10 / 10 / 2022</span>
              <span>Paciente: Carolina Romero</span>
              <span>Especialización: Medicina General</span>
              <span>Ubicación: Virtual</span>
              <button className="btnToPay">Enviar por correo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PaymentsAndBilling;
