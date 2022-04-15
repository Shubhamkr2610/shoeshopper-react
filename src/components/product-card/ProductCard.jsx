import React  from 'react'
import { useWishList} from 'context/WishListContext' 
import "./ProductCard.css"


export const ProductCard = ({ _id,brand, title, discountedPrice, actualPrice, discountoff, srcimg, rating }) => {
    
    const { wishlist, addToWishList, removeFromWishList, addToCart } = useWishList()

    return (
        <div className="card-vertical">
            <div className="card-vertical-header">
                <span className="status-badge">In stock</span>
                <span className="badge-dismiss" > { wishlist.some((item) => item._id === _id )? (<i style={{color:"red"}} onClick={ () => removeFromWishList(_id) } className="fa fa-heart" aria-hidden="true"></i>) : ( <i onClick={() => addToWishList( { _id,brand, title, discountedPrice, actualPrice, discountoff, srcimg, rating}) } className="fa fa-heart" aria-hidden="true"></i> )} </span>
            </div>
            <img src={srcimg} alt="shoe image" className="card-vertical-img" />
            <h1 className="card-head">{brand}</h1>
            <p className="card-text">{title}</p>
            <div className="card-vertical-footer">
                <span className="current-price">
                    <strong>₹{discountedPrice}</strong>
                </span>
                <span className="earlier-price">₹{actualPrice}</span>
                <span className="price-off">{discountoff}</span>
                <span className="product-rating">{rating}<i class=" fas fa-solid fa-star"></i></span>
            </div>
            <div className="footer-button">
                <button className="primary-button" onClick={() => addToCart({ _id,brand, title, discountedPrice, actualPrice, discountoff, srcimg, rating }) } >Add to cart</button>
            </div>
        </div>
    )
}
