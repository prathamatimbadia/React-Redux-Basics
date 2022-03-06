export const getActiveProductList=(state)=>{
    let activeProductList = (state.isSearchActive || state.searchProducts.length >0 ) ? state.searchProducts : state.products;
    return activeProductList;
  }
  
  export const filterProductsByCategory=(state,payload)=>{
    let activeProdList = (state.selectedRatingProducts.length >0) ? state.selectedRatingProducts : getActiveProductList(state); 
    let filteredProducts = activeProdList.filter((item) => item.category === payload.toLowerCase())
    return filteredProducts
  }
  
  export const filterProductsByRating=(state,payload)=>{
    let filteredProductsByRating = []
    let activeProductsList = (state.selectedCategoryProducts.length >0) ? state.selectedCategoryProducts : getActiveProductList(state);
  
    filteredProductsByRating = activeProductsList.filter((item) => item.rating.rate >= parseInt(payload));
    return filteredProductsByRating;
  }
  
  export const searchProducts=(payload)=>{
  let searchedProducts = payload.products.filter(
      (product) => { return product.title.toLowerCase().indexOf(payload.searchText) !== -1 }
  );
  return searchedProducts;
  }