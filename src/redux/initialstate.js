export const intialState = {
    customerRatings: [
      { key: '4', value: '4star & above'},
      { key: '3', value: '3star & above' },
      { key: '2', value: '2star & above'},
      { key: '1', value: '1star & above'}
    ],
    categories: [
      "Men's Clothing",
      "Women's Clothing",
      "Jewelery",
      "Electronics"
    ],
    products: [],
    activeProducts:[],
    searchProducts: [], 
    selectedCategoryProducts:[],
    selectedRatingProducts:[],
    searchText:'',
    isFilterApplied: false,
    isRatingFilterApplied: false,
    isSearchActive: false
  };