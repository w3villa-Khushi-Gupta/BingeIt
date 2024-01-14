import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Temp from './Temp';

function ProtectedRoute() {
    const token = localStorage.getItem('token');
    console.log(token)
    // const navigate =useNavigate()

    return token ? (<Outlet />) : (<Navigate to= '/temp' replace />)
    // if (!token) {
    //     return 
    // } else {
    //     // return <Navigate to="/temp" replace />;
    //     <Outlet />
    // }

    // // Move this line outside of the if-else block
    // return children;
}

export default ProtectedRoute;
