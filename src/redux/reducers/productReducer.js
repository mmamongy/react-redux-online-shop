import { ActionTypes } from "../constants/action-types"

// take intial state and action  
const initialState = {
    products: [ {
        id: 1, 
        title: 'maryam',
        category: 'programmer'
    }] 
}
export const productReducer = (state = initialState, { type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PRODUCTS: 
            return state;
        default:
            return state ;
    }
}