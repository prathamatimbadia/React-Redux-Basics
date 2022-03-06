import React from 'react'
import { useDispatch } from 'react-redux';
import styles from './ProductListing.module.css';
import Product from "./Product";
import { resetState } from '../../redux/actions/productActions';

/**
 * 
 * This component is a combination of list of product cards you see.
 *  
 */
const ProductListing = ({products,areProductsFiltered}) => {
  let dispatch = useDispatch();

  const handleResetAllFilters=()=>{
    dispatch(resetState())
  }
  return (
    <div className={styles.productListing}>
   {areProductsFiltered?(<span><h4 onClick={handleResetAllFilters}>Return to all products</h4></span>):(<h4>Our Products</h4>)}
    <div className={styles.productListing__products}>{products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
    </div>
  )
}

export default ProductListing