import * as actionTypes from "../actions/actionTypes";

const initalState = {
    position : null,
};

const dataReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.POSITION:
            return {...state, position: action.value };
        default:
            return state;
    }
};

export default dataReducer;