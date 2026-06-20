import React from 'react';
import { AuthContext } from '../Auth_Context/Auth_Context';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then()
    .catch();
  };
  const signUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
    .then()
    .catch()
  }

  onAuthStateChanged(auth,(currentUser)=>{
    if(currentUser){
        console.log("")
    }
    else{
        console.log("")
    }
  })

  const authInfo = {
    createUser,
    signUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
