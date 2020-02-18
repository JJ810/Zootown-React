const defaultState = {
    userAuth: {
        token: ""
    }
}

export default function(state = defaultState, {type, ...action}) {
    switch(type) {
        default: return state;
    }
}

