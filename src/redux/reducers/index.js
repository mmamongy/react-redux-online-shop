//mutliple reducers 

import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
 //states
export const reducers = combineReducers({
    allProducts: productReducer,
    product:selectedProductReducer
})

