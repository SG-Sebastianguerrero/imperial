import "../default.css";
import "./PaymentsAndBilling.css";
import Navbar from "../../components/Navbar/Navbar";
import { Component } from "react";

class PaymentsAndBilling extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <section className="internalSection medicalHistory">
          <h1 className="text">Pagos y facturas</h1>
          <a href="/PaymentMethods">makePayment</a>
        </section>
      </div>
    );
  }
}
export default PaymentsAndBilling;
