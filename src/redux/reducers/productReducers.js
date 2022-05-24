import { actionTypes } from '../actions/actionTypes'


export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case actionTypes.REMOVE_PRODUCTS:
      return {}
    default:
      return state;
  }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
}

export const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_CART:
      return [...state, payload]
    default:
      return state;
  }
}
