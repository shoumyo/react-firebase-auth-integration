import React, { use } from 'react';
import { AuthContext } from '../Context/Auth_Context/Auth_Context';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const{user,loading}=use(AuthContext);
    const location=useLocation();
    if(loading){
        return <span className='loading loading-spinner text-success'></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location?.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoutes;