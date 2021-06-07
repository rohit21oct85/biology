import * as actionTypes from "../actions/actionTypes";

const initalState = {
    position : null,
    charecter: 'Normal'
};

const dataReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.POSITION:
            return {...state, position: action.value };
        case actionTypes.CHANGE_STATE:
            return {...state, charecter: action.value };
        default:
            return state;
    }
};

export default dataReducer;