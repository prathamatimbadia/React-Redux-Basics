import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const searchProduct = (data) => {
  return {
    type: ActionTypes.SEARCH_PRODUCT,
    payload: data,
  };
};

export const filterProductsByCategory=(category)=>{
  return{
    type:ActionTypes.FILTER_PRODUCTS_BY_CATEGORY,
    payload:category
  } 
}

export const filterProductsByRating=(rating)=>{
  return{
    type:ActionTypes.FILTER_PRODUCTS_BY_RATING,
    payload:rating
  } 
}

export const resetState=()=>{
  return{
    type: ActionTypes.RESET_STATE
  }
}

