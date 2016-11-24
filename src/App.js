import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
