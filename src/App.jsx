import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';
import Home from 'pages/Home';
import Login from 'pages/Login';
import LoginDenied from 'pages/LoginDenied';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    window.user = {};

    firebase.initializeApp({
      apiKey: "AIzaSyCTPQH9G9B7UBz1asD9_r_hZE5xY1NVLpQ",
      authDomain: "sudokumultiplayer.firebaseapp.com",
      databaseURL: "https://sudokumultiplayer.firebaseio.com",
      projectId: "sudokumultiplayer",
      storageBucket: "sudokumultiplayer.appspot.com",
      messagingSenderId: "296284276109"
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home } />

          <Route path='/login/denied' component={ LoginDenied } />
          <Route path='/login' component={ Login } />
        </Switch>
      </div>
    );
  }
}

export default App;
