import React from 'react';
import { AuthContext } from '../Auth_Context/Auth_Context';

const AuthProvider = ({children}) => {
    const authInfo={
        user:'allu@gg'
    }
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;