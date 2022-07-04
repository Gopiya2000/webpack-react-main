const initialState = {
    login : false,
    signup : false,
    user : true
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_LOGIN' : return {
            ...state,
            login : true
        }
        case 'SET_LOGOUT' : return {
            ...state,
            login : false
        }
        case 'SET_SIGNUP' : return {
            ...state,
            signup : true
        }
        case 'SET_SIGNOUT' : return {
            ...state,
            signup : false
        }
        case 'TOGGLE_SIGNUP' : return {
            ...state,
            signup : ! state.signup
        }
        default : return state
    }
}

export default authReducer