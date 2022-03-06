import { ActionTypes } from "../constants/action-types";
import { intialState } from "../initialstate";
import {
  searchProducts,
  filterProductsByCategory,
  filterProductsByRating
} from "../../helper/productHelper";


export const productsReducer = (state = intialState, { type, payload }) => {

  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload, activeProducts: payload };

    case ActionTypes.SEARCH_PRODUCT:
      let searchedProducts = searchProducts(payload);

      return {
        ...state,
        searchText: payload.searchText,
        isSearchActive: !!payload.searchText.length > 0 || false,
        searchProducts: [...searchedProducts],
        activeProducts: [...searchedProducts]
      };

    case ActionTypes.FILTER_PRODUCTS_BY_CATEGORY:
      let filteredProducts = filterProductsByCategory(state, payload);

      return {
        ...state,
        activeProducts: [...filteredProducts],
        isFilterApplied: true,
        selectedCategoryProducts: [...filteredProducts]
      };

    case ActionTypes.FILTER_PRODUCTS_BY_RATING:
      let filteredProductsByRating = filterProductsByRating(state, payload);

      return {
        ...state,
        activeProducts: [...filteredProductsByRating],
        selectedRatingProducts: [...filteredProductsByRating],
        isRatingFilterApplied: true,
        isFilterApplied: true,
      };

    case ActionTypes.RESET_STATE:
      return {
        ...state,
        searchText: '',
        isSearchActive: false,
        isRatingFilterApplied: false,
        isFilterApplied: false,
        searchProducts: [],
        activeProducts: [],
        selectedCategoryProducts: [],
        selectedRatingProducts: []
      }

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};