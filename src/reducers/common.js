const defaultState = {
  currentModal: ''
}

export default function(state = defaultState, {type, ...action}) {
    switch(type) {

        case "CHANGE_MODAL":
            return {
                ...state,
                currentModal: action.className
            };

        case "GET_PLANS":
            return{
                ...state,
                plans: action.payload.plans
            }
        default: return state;
    }
}

