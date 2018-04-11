/**
 * Created by Richard.ji on 4/9/2018.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {createReactNavigationReduxMiddleware, createReduxBoundAddListener
} from 'react-navigation-redux-helpers';
import Tester from './testContainer/Tester';
import Home from './testContainer/Home';
import Mine from './testContainer/Mine';
export const AppNavigator = StackNavigator({
    Tester: {screen: Tester},
    Home: {screen: Home},
    Mine: {screen: Mine}
});

export const middleware = createReactNavigationReduxMiddleware('root');
const addListener = createReduxBoundAddListener('root');

class App extends Component {
    render () {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
                addListener
            })}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(App);