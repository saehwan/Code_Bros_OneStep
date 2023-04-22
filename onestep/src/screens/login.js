//import React, { useState } from 'react';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import LoginPage from './components/LoginPage';

//database Connection
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth, database } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    //props.onSignIn(email, password);
    //handleSignIn(email, password);
    props.onSignIn(email,password);
  }

  function handleSignIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Sign-in successful
        const user = userCredential.user;
        console.log(`Signed in as ${user.email}`);
        // call the onSignIn callback function to update the app state
        setIsSignedIn(true);
      })
      .catch((error) => {
        // Sign-in failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Sign-in failed: ${errorCode} ${errorMessage}`);
      });
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default LoginPage;
