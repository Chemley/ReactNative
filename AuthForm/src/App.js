import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBXc1qfnMjWNzcDgYU6iqddQyQvT3b8EOs',
      authDomain: 'auth-88439.firebaseapp.com',
      databaseURL: 'https://auth-88439.firebaseio.com',
      projectId: 'auth-88439',
      storageBucket: 'auth-88439.appspot.com',
      messagingSenderId: '353009273225'});
    }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
