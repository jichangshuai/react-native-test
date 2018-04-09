/**
 * Created by Richard.ji on 4/8/2018.
 */
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/Index';
const middleWares = [thunk];
const reducerEnhancers = compose(applyMiddleware(...middleWares));

export default (initialState) => {
    const store = createStore(reducer, initialState, reducerEnhancers);
    return store;
}