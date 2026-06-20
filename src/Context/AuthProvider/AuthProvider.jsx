import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Auth_Context/Auth_Context';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const[user,setUser]=useState(null);
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

  const signOutUser=()=>{
    return signOut(auth)
  }

//   onAuthStateChanged(auth,(currentUser)=>{
//     if(currentUser){
//         console.log("")
//     }
//     else{
//         console.log("")
//     }
//   })

useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    return()=>{
        unsubscribed();
    }
},[])

  const authInfo = {

    user,
    createUser,
    signUser,
    signOutUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
