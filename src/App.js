import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home/Home.js'
import Login from './pages/Login/Login.js'
import Signup from './pages/Signup/Signup.js'
import MedicalHistory from './pages/MedicalHistory/MedicalHistory.js'
/* import { ProtectedRoute } from './components/ProtectedRoute.js' */

function App() {
  const [user, setUser] = useState(null)

  const login = () =>{
    setUser({
      id: 1,
      name: "imperial"
    })
  }
  
  const logout =() => setUser(null)

  return (
    <BrowserRouter>
      {
        user ?(
          <button onClick={logout}>Logout</button>
        ):(
          <button onClick={login}>LogIn</button>
        )
      }

      <Routes>
        <Route index element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/medicalHistory" element={<MedicalHistory/>} />
        <Route path="/dashboard" element={ <Home/> } />
        {/* <Route element={<ProtectedRoute user={user}> */}
        {/*  </ProtectedRoute>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;