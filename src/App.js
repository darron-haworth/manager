import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDYvfp4yCNxiyF-39mPrAC0fqdRkOTaLvU',
            authDomain: 'udemy-rn-auth.firebaseapp.com',
            databaseURL: 'https://udemy-rn-auth.firebaseio.com',
            storageBucket: 'udemy-rn-auth.appspot.com',
            messagingSenderId: '454126433225'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ marginTop: 20 }}>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

export default App;
