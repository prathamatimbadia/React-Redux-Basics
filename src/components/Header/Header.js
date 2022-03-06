import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { searchProduct,resetState } from "../../redux/actions/productActions";
/**
 * This components form the header of the website.
 * You can search for a particular item using the search bar.
 */
const Header = () => {
    const {products,searchText} = useSelector((state) => state.allProducts);
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        dispatch(searchProduct(
            {
                searchText: e.target.value.toLowerCase(),
                products: products
            }));
    }

    const handleReset=()=>{
        dispatch(resetState());
    }

    return (
        <nav className={styles.header}>
            <Link to="/" onClick={handleReset}>
                <strong id={styles.header_title}>FAKESHOP</strong>
            </Link>
            
            <input className={styles.header__searchInput}
                placeholder="Search..."
                type="text"
                value={searchText}
                onChange={handleSearch} />
        </nav>

    )
}

export default Header