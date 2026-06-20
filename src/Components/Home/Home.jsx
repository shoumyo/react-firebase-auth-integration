import React, { use } from 'react';
import AuthProvider from '../../Context/AuthProvider/AuthProvider';

const Home = () => {
    const authInfo=use(AuthProvider);
    return (
        <div>
            <h3>Home</h3>
        </div>
    );
};

export default Home;