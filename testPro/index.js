import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import App from './app/container/testContainer/Tester';
import configStore  from './app/redux/Store';

const store = configStore();

export default class Root extends Component {
    render () {
        return (
            <Provider store= {store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('testPro', () => Root);
