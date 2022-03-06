import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterPanel.module.css";
import { filterProductsByCategory,filterProductsByRating, resetState } from '../../redux/actions/productActions';

/**
 * This component consists of various filter categories (like
 * Product Category,Product Ratings) to choose from.
 * 
 */
const FilterPanel = () => {
  let dispatch = useDispatch();
  const {customerRatings,isFilterApplied,categories} = useSelector((state) => state.allProducts);
  
  const handleClearAllFilter = () => {
    dispatch(resetState())
  }

  const handleCategoryFilter = (category) => {
    dispatch(filterProductsByCategory(category))
  }

  const handleRatingsFilter=(rating)=>{
    dispatch(filterProductsByRating(rating))
  }

  return (
    <div className={styles.filterPanel}>
      <h3>Filters</h3>
      {isFilterApplied && (
        <div onClick={handleClearAllFilter}>
          <label>Clear all</label>
        </div>
      )}
      <h4>Category</h4>
      <ul>{categories.map(category => (
        <li
          key={category}
          className={styles.filterPanel__category}
          onClick={() => handleCategoryFilter(category)}
        >{category}</li>
      ))}</ul>

      <h4>Customer Ratings</h4>
      <div>{customerRatings.map(item => (
       <div className={styles.filterPanel__customerRating} key={item.key} >
       <input 
       type="radio" 
       id={item.key} 
       defaultChecked='false'
       name="customerRating"
       value={item.key}
       onClick={()=>handleRatingsFilter(item.key)}
       />
       <label htmlFor={item.key}> {item.value}</label><br /> 
       </div>
      ))}
      </div>
    </div>
  )
}

export default FilterPanel