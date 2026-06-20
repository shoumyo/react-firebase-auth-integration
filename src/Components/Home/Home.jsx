import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Auth_Context/Auth_Context';

const Home = () => {
  const authInfo = useContext(AuthContext);
  return (
    <div>
      <h3>Home</h3>
      <p>Welcome, {authInfo?.user || 'Guest'}</p>
    </div>
  );
};

export default Home;
