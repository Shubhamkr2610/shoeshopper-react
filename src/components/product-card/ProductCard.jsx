import { useHeader } from 'context/HeaderContext'
import React, { useState } from 'react'
import "./ProductCard.css"


export const ProductCard = ({ brand, title, discountedPrice, actualPrice, discountoff, srcimg }) => {
    const { setCounter , setCartCounter} = useHeader()
    const [wishlistColor , setWishlistColor] = useState("")

    const wishlistHandler = () =>{
         setCounter( count => count + 1 )
         setWishlistColor("red")
    }
    const cartHandler = () =>{
        setCartCounter(count => count + 1)
    }

    return (
        <div className="card-vertical">
            <div className="card-vertical-header">
                <span className="status-badge">In stock</span>
                <span className="badge-dismiss" onClick={wishlistHandler} style={{color : wishlistColor}}> <i className="fa fa-heart" aria-hidden="true"></i></span>
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
            </div>
            <div className="footer-button">
                <button className="primary-button" onClick={cartHandler}>Add to cart</button>
            </div>
        </div>
    )
}
