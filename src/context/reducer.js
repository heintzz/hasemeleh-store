import { GET_ITEMS, GET_CARTS, UPDATE_CARTS, INCREASE, DECREASE, REMOVE_CART, OPEN_CLOSE, CHANGE_LOGIN_STATE } from './actions'

function reducer(state, action) {
    switch (action.type) {
        case GET_ITEMS:
            return { ...state, isLoading: false, items: action.payload }
        case GET_CARTS:
            return { ...state, carts: action.payload }
        case UPDATE_CARTS:
            return { ...state, carts: action.payload }
        case REMOVE_CART:
            return { ...state, carts: action.payload}
        case INCREASE:
            return { ...state, carts: action.payload}
        case DECREASE:
            return { ...state, carts: action.payload}
        case OPEN_CLOSE:
            return { ...state, isModalOpen: action.payload}
        case CHANGE_LOGIN_STATE:
            return {...state, isLogin: action.payload}
        default:
            return state
    }
}

export default reducer
