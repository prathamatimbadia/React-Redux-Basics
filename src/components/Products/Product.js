import React from "react";
import { Link } from "react-router-dom";
import styles from './Product.module.css';

/**
 * This component compromises of the product card
 *  to give you information about the produt title,product name,product rating,etc
 */

const Product = ({product}) => {
const { id, title, image, price,rating } = product;
    return (
        <div className={styles.product}>
            <Link to={`/product/${id}`} className={styles.product__link}>
            <img src={image} alt={title} className={styles.product__img}/>
            <div className={styles.product__info}>
                <p>{title}</p>
                <p className={styles.product_rating}>
                    <small>Rating : </small>
                    <small>{rating.rate}</small>
                </p>
                <p className={styles.product__price}>
                    <small>SEK </small>
                    <strong>{price}</strong>
                </p>
            </div>
            </Link>
        </div>
    )
}

export default Product;