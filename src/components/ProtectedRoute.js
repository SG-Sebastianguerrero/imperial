import Login from '../pages/Login/Login.js'
import { Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ user, children, redirectTo ="/"}) => {
    if(!user){
        return <Login to={redirectTo}></Login>
    }
    return children ? children: <Outlet/>
}