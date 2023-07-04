import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/database'

function login(){
  console.log('Start file login');
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
    var database = firebase.database();

    var ggProvider = new firebase.auth.GoogleAuthProvider();

    //Sing in with Google
    
    firebase.auth().signInWithPopup(ggProvider).then( result => {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log('User>>Goole>>>>', user);
      let userId = user.uid;

    }).catch(function(error) {
      console.error('Error: hande error here>>>', error.code)
    })

}

function App_nav() {
  return (
    <nav>
      <div class="form-group text-center">
         <button class="btn btn-block btn-social btn-google" id="btnGoogle" type="button">
          <span class="fa fa-google">

        </span>Login with Google</button>
      </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
    <script src = "login.js">
        const btnGoogle = document.getElementById('btnGoogle');
        btnGoogle.addEventListener('click', {login()},false);
    </script>
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
