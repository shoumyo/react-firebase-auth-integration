// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKopZIuuyg6Po2job-yET3igjbO_38mnQ',
  authDomain: 'react-firebase-auth-inte-51499.firebaseapp.com',
  projectId: 'react-firebase-auth-inte-51499',
  storageBucket: 'react-firebase-auth-inte-51499.firebasestorage.app',
  messagingSenderId: '840537395448',
  appId: '1:840537395448:web:c1d55fa79c6e1669c52b0d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
