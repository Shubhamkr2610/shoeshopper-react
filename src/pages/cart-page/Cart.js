import { CartCard } from 'components/cart-card/CartCard';
import { useWishList } from 'context/WishListContext';
import React from 'react'
import "./cart.css"

export const Cart = () => {

    const {cartItem} = useWishList();

  return (
    <>
    <div className='cart-wrapper'>
    {cartItem.length === 0 ? <p className="ecomm-cart-title">Your cart is empty</p>: 
    <>
    <p className="ecomm-cart-title"> Your Cart</p>
     <main className="cart-page-container">
        <div className="ecomm-card-container" >

        {cartItem.map(({ _id,brand, title, discountedPrice, actualPrice, discountoff, srcimg, rating}) => (<CartCard key={_id} 
                    _id = {_id} brand = {brand } title = {title } discountedPrice = { discountedPrice } actualPrice = {actualPrice} discountoff = {discountoff}  srcimg ={srcimg} rating={rating} />))}

        </div>
    
            {/* <!----------------cart price section---------------------> */}
        <section className="price-checkout-container">
            <div>
                <section className="cart-price-container">
                    <p className="cart-price-heading">PRICE DETAILS </p>
                    <p className="cart-product-price">Price(2 items) <span>	
                        &#8377;8000</span></p>
                    <p className="cart-product-price">Discount <span>-	
                        &#8377;7000</span></p>
                    <p className="cart-product-price">Delivery charges <span>	
                        &#8377;100</span></p>
                    <p className="cart-price-heading" id="price-border-top">TOTAL AMOUNT <span>	
                        &#8377;1100</span></p>
                    <p className="cart-product-price" id="product-price-sm">YOU WILL SAVE 	
                        &#8377;7000 ON THIS ORDER</p>
                    <button className="place-order-button">PLACE ORDER</button>
                </section>
            </div>
        </section>
    
    </main>
    </>
    }
    </div>
    </>
  );
}
