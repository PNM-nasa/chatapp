import React, { Component, useId } from 'react';
import { useEffect } from "react";


import './App.css';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/database'
import 'firebase/compat/auth';

var config = {
  apiKey: "AIzaSyA_4iJEdH5s2P9ddE72mm6UTX4Cfonk0AM",
  authDomain: "chatapp-512dd.firebaseapp.com",
  projectId: "chatapp-512dd",
  storageBucket: "chatapp-512dd.appspot.com",
  messagingSenderId: "330835811954",
  appId: "1:330835811954:web:df0c1e6d7446ea49322ceb",
  measurementId: "G-NYK5SQSZ6X"
};

firebase.initializeApp(config);

var userId = 0;
function login(){
  console.log('Start file login');
  var database = firebase.database();

  var ggProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'it';
  ggProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  /*ggProvider.setCustomParameters({
      'login_hint': 'maingocphong176@gmail.com'
  });*/
    firebase.auth().signInWithPopup(ggProvider).then( result => {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log('User>>Goole>>>>', user);
      userId = user.uid;
    alert(userId)
    }).catch(function(error) {
      console.error('Error: hande error here>>>', error.code)
    })
}

function logout(){
  firebase.auth().signOut().then(() => {
    console.log('Sign-out successful.');
  }).catch((error) => {
    console.log('An error happened')
  });
}

function App_nav() {

  return (
    <nav>
      <button id="btnGoogle" type="button" onClick={login}>
          login
      </button>

      <button type="button" onClick={logout}>
          logout
      </button>
      
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
    
    </nav>
  );
}
function App() {
  return (
    <div className="App">
      <App_nav/>
    </div>
  );
}

export default App;
