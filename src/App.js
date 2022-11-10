import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.js";
import Signup from "./pages/Signup/Signup.js";
import MedicalHistory from "./pages/MedicalHistory/MedicalHistory.js";
import MedicalAppointments from "./pages/MedicalAppointments/MedicalAppointments.js";
import AppointmentsRequest from "./pages/AppointmentsRequest/AppointmentsRequest.js";
import PaymentsAndBilling from "./pages/PaymentsAndBilling/PaymentsAndBilling.js";
import Settings from "./pages/Settings/Settings.js";
import VideoCalls from "./pages/VideoCalls/VideoCalls.js";

/* import { ProtectedRoute } from './components/ProtectedRoute.js' */

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      name: "imperial",
    });
  };

  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      {/* {
        user ?(
          <button onClick={logout}  id="logOut">cerrar sesión</button>
          ):(
            <button onClick={login} id="logIn">Iniciar sesión</button>
            )
          } */}

      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/medicalHistory" element={<MedicalHistory />} />
        <Route path="/MedicalAppointments" element={<MedicalAppointments />} />
        <Route path="/AppointmentsRequest" element={<AppointmentsRequest />} />
        <Route path="/VideoCalls" element={<VideoCalls />} />
        <Route path="/PaymentsAndBilling" element={<PaymentsAndBilling />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />

        {/* <Route element={<ProtectedRoute user={user}> */}
        {/*  </ProtectedRoute>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
