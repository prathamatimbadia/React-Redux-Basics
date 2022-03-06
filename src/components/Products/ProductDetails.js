import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../../request";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";

/**
 * This component gived you more information about the product.
 * You can also add a produt to the cart using  'Add to cart' button(funtionality 
 * development in progress)
 */
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const getProductDetails = async (id) => {
    const productDetails = await fetchProductDetail(id)
    dispatch(selectedProduct(productDetails));
  };

  useEffect(() => {
    if (productId && productId !== "") getProductDetails(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">SEK {price}</a>
                </h2>
                <h3 className="ui brown block header">Category:{category.toUpperCase()}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;