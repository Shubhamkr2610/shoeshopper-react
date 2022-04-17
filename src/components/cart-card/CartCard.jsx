import { useWishList } from 'context/WishListContext'
import React from 'react'
import './CartCard.css'

export const CartCard = ({ _id,brand, title, discountedPrice, actualPrice, discountoff, srcimg, rating, quantity}) => {
    const { addToWishList , wishlist, removeFromCart, increaseQuantity, decreaseQuantity} = useWishList();

    const moveToWishListHandler = () => { 
        addToWishList({ _id,brand, title, discountedPrice, actualPrice, discountoff, srcimg, rating })
            removeFromCart(_id)
   
    }

  return (
    <>
        <div className="card-horizontal">

            <div className="card-horizontal-container">
                <div className="horizonal-image">
                    <img src={ srcimg } alt="shoe image" className="card-horizontal-img" />
                </div>

                <div className="horizontal-description">
                    <h1 className="card-head">{brand} </h1>
                    <p className="card-text">{title} </p>
                    <div className="card-vertical-footer">
                        <span className="current-price">
                            <strong>₹{discountedPrice}</strong>
                        </span>
                        <span className="earlier-price">₹{actualPrice}</span>
                        <span className="price-off">{(discountoff)}</span>
                    </div>
                    <div className="item-quantity">
                        <button onClick={ () => decreaseQuantity(_id) }>-</button>
                        <p>{quantity}</p>
                        <button onClick={ () => increaseQuantity(_id) }>+</button>
                    </div>
                    <button className="primary-button horizontal-button" onClick={ () => removeFromCart(_id) } > Remove from cart</button>
                    <button className="primary-button horizontal-button " onClick={ moveToWishListHandler} >Move to wishlist</button>
                </div>
            </div>
        </div>
    </>
  )
}
