/**
 * Created by Richard.ji on 4/9/2018.
 */
import * as types from '.././../../container/constant/ActionTypes';
const initialState = {
    isMine: false,
    mineMessage: 'This is mine page!',
}
const MineReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NAVIGATE_MINE:
            return {...state, ...action.state};
        default :
            return state;
    }
}

export default MineReducer;