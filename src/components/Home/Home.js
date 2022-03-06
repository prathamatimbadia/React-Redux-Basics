import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import FilterPanel from "../Filter/FilterPanel";
import styles from './Home.module.css';
import ProductListing from "../Products/ProductListing";
import { fetchProducts } from "../../request";

/**
 * This component is the main page
 * It consists of teo parts mainly Filter Panel to filter from the list of products
 * and Product Listing Page which consists of list f products
 */
const Home = () => {
  const dispatch = useDispatch();
  const { isSearchActive, products,isFilterApplied, activeProducts } = useSelector((state) => state.allProducts);
    const currentProducts = (activeProducts.length > 0 || isSearchActive || isFilterApplied) ? activeProducts: products//filteredProducts.length > 0 ? filteredProducts : (isSearchActive || (searchProducts.length > 0))  ? searchProducts : products;

  const getProducts = async () => {
    let products = await fetchProducts();
    dispatch(setProducts(products));
  };

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <div className={styles.home}>     
        <FilterPanel></FilterPanel>
        <ProductListing products={currentProducts} areProductsFiltered={isSearchActive || isFilterApplied}></ProductListing>
    </div>
  );
};

export default Home;