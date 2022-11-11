import "../default.css";
import "./PaymentMethods.css";
import Navbar from "../../components/Navbar/Navbar";
import { Component } from "react";

class PaymentMethods extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <section className="internalSection medicalHistory">
          <div className="paymentMethods">
            <h1 className="text">Realizar el pago</h1>
            <div className="text-container">
              <div className="label-content">
                <label className="label-description">
                  Se realizará el pago de:
                </label>
                <span className="label-indication">Examen Optometría</span>
              </div>
              <div className="label-content">
                <span className="label-description">Por:</span>
                <span className="label-indication">$47.000</span>
              </div>
              <div className="label-content">
                <label className="label-description">Ubicación:</label>
                <span className="label-indication">
                  Bogotá calle 22 c 54 b 10
                </span>
              </div>
              <div className="label-content">
                <label className="label-description">Para:</label>
                <span className="label-indication">Carolina Romero</span>
              </div>
            </div>
            <div className="select-container">
              <label className="label-description">
                Elija un método de pago
              </label>
              <select id="paymentMethods" name="paymentMethods">
                <option>Bancolombia</option>
                <option>Davivienda</option>
                <option>PSE</option>
                <option>Paypal</option>
              </select>
            </div>
            <button className="btnForm">Ir al banco</button>
          </div>
        </section>
      </div>
    );
  }
}
export default PaymentMethods;
