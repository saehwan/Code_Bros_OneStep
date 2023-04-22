import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth, database } from "../components/firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { Input, Button } from '@mui/material';

import ellipse from '../img/ellipse.png';
import subtract from '../img/subtract.png';
import treetop from '../img/treetop.png';
import treemiddle from '../img/treemiddle.png';
import treebottom from '../img/treebottom.png';

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

    <div style={styles.loginPage}>
      <div>
        <img style={styles.leftEllipse} src={ellipse} />
      </div>
      <div style={styles.mainForm}>
        <h2 style={styles.loginTitle}>One Step</h2>
        <form style={styles.loginForm} onSubmit={handleSubmit}>
            <Input
            style={styles.input}
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            />
            <Input
            style={styles.input}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            />
            <Button style={{backgroundColor: '#7E7466', color: 'white', textTransform: 'none'}} type="submit">login</Button>
        </form>
      </div>
      <div>
        <img style={styles.rightEllipse} src={subtract} />
        <img style={styles.treetop} src={treetop} />
        <img style={styles.treemiddle} src={treemiddle} />
        <img style={styles.treebottom} src={treebottom} />
      </div>
    </div>
  );
}

export default LoginPage;

let styles = {
    loginPage: {
        display: 'flex',
        flexDirection: 'row'
    },
    leftEllipse: {
        position: 'absolute',
        margin: 'auto',
        left: '0',
        top: '20%',
        height: '500px'
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        position: 'absolute'
    },
    loginTitle: {
        fontFamily: 'sanchez',
        color:'#698975',
        fontSize: '60px'
    },
    rightEllipse: {
        position: 'absolute',
        right: '0'
    },
    treetop: {
        position: 'absolute',
        right: '50px',
        bottom: '20px',
    },
    treemiddle: {
        position: 'absolute',
        right: '1px',
        bottom: '1px',
    },
    treebottom: {
        position: 'absolute',
        right: '0',
        bottom: '0',
    },
    mainForm: {
        margin: 'auto',
        marginTop: '15%',
        alignItems: 'center'
    },
    input: {
        borderStyle: 'hidden',
        borderBottomStyle: 'solid',
        width: '250px',
        marginBottom: '4%',
        borderColor: '#698975'
    }
}