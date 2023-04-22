import './App.css';

import Dashboard from './screens/dashboard';

//import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './screens/login';
//import SignInSuccess from './components/logintest';
import firebase from './components/firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth, database } from "./components/firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

//database Connection

// // Initialize Firebase
// const fireapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fireapp);

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  function handleSignIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Sign-in successful
        const user = userCredential.user;
        console.log(`Signed in as ${user.email}`);
        setIsSignedIn(true);
      })
      .catch((error) => {
        // Sign-in failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Sign-in failed: ${errorCode} ${errorMessage}`);
      });
  }
  
  if(!isSignedIn){
    return (
      <div className="App">
        <LoginPage onSignIn={handleSignIn} />
      </div>
      );
  }
  
  //replace later with dashboard
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
  )
  
}

export default App;
