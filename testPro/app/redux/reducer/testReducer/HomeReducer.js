/**
 * Created by Richard.ji on 4/9/2018.
 */
import * as types from '.././../../container/constant/ActionTypes';
const initialState = {
    isHome: false,
    homeMessage: 'This is home page!',
};

const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NAVIGATE_HOME:
            return {...state, ...action.state};
        default :
            return state;
    }
}

export default HomeReducer;