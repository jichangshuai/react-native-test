/**
 * Created by Richard.ji on 4/9/2018.
 */
import {AppNavigator} from './../../../container/App';
import {NavigationActions} from 'react-navigation';
import * as types from './../../../container/constant/ActionTypes';
const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Tester')
)
const nav = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case types.NAVIGATE_TESTER:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Tester'}),
                state
            );
            break;
        case types.NAVIGATE_HOME:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Home'}),
                state
            );
            break;
        case types.NAVIGATE_MINE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Mine'}),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state
}

export default nav;