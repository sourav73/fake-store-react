import { actionTypes } from "./actionTypes";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const removeProducts = () => {
  return {
    type: actionTypes.REMOVE_PRODUCTS,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const updateCart = (cart) => {
  return {
    type: actionTypes.UPDATE_CART,
    payload: cart,
  };
};
