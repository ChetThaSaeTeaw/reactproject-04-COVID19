/*import { ActionTypes } from "../constains/action-types"

const initialState = {
    products : [],
};
export const productReducer = (state = initialState , { type , payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS :
            return { ...state, products : payload };
        default:
            return state;
    }
};

export const seletedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT :
            return {...state, ...payload}
        default:
            return state;
    }
}*/

import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};