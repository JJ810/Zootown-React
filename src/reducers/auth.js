import * as actionAuth from '../actions/auth';
const defaultState = {
}

export default function(state = defaultState, {type, ...action}) {
    switch(type) {
        case actionAuth.UPDATE_AUTH: {
            return {
                ...state,
                ...action.payload
            };
        }
        case actionAuth.REMOVE_AUTH: {
            return {};
        }
        case actionAuth.UPDATE_USER: {
            return {
                ...state,
                user_id: action.payload
            }
        }
        default: return state;
    }
}
