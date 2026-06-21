import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Auth_Context/Auth_Context';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then().catch();
  };
  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).then().catch();
  };

  const signInWithGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   onAuthStateChanged(auth,(currentUser)=>{
  //     if(currentUser){
  //         console.log("")
  //     }
  //     else{
  //         console.log("")
  //     }
  //   })

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signUser,
    signOutUser,
    signInWithGoogle,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
