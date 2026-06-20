import React, { use } from 'react';
import { AuthContext } from '../Context/Auth_Context/Auth_Context';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const{user}=use(AuthContext);
    if(user){
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;