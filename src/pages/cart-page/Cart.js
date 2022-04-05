import React from 'react'
import "./cart.css"
import { sport1, sport2 } from 'asset';
export const Cart = () => {
  return (
    <>
    <p class="ecomm-cart-title"> Your Cart</p>
     <main class="cart-page-container">
        <div class="ecomm-card-container" >

            <div class="card-horizontal">

                <div class="card-horizontal-container">
                    <div class="horizonal-image">
                        <img src={ sport1 } alt="shoe image" class="card-horizontal-img" />
                    </div>

                    <div class="horizontal-description">
                        <h1 class="card-head">Nike airforce </h1>
                        <p class="card-text">Designed by Bruce Kilgore and introduced in 1982. </p>
                        <div class="card-vertical-footer">
                            <span class="current-price">
                                <strong>₹500</strong>
                            </span>
                            <span class="earlier-price">₹2000</span>
                            <span class="price-off">(75% off)</span>
                        </div>
                        <button class="primary-button horizontal-button"> Remove from cart</button>
                        <button class="primary-button horizontal-button ">Move to wishlist</button>
                    </div>
                </div>
            </div>


            <div class="card-horizontal">

                <div class="card-horizontal-container">
                    <div class="horizonal-image">
                        <img src={sport2} alt="shoe image" class="card-horizontal-img" />
                    </div>

                    <div class="horizontal-description">
                        <h1 class="card-head">Nike airforce </h1>
                        <p class="card-text">Designed by Bruce Kilgore and introduced in 1982. </p>
                        <div class="card-vertical-footer">
                            <span class="current-price">
                                <strong>₹500</strong>
                            </span>
                            <span class="earlier-price">₹2000</span>
                            <span class="price-off">(75% off)</span>
                        </div>
                        <button class="primary-button horizontal-button"> Remove from cart</button>
                        <button class="primary-button horizontal-button ">Move to wishlist</button>
                    </div>
                </div>
            </div>

        </div>
            {/* <!----------------cart price section---------------------> */}
        <section class="price-checkout-container">
            <div>
                <section class="cart-price-container">
                    <p class="cart-price-heading">PRICE DETAILS </p>
                    <p class="cart-product-price">Price(2 items) <span>	
                        &#8377;8000</span></p>
                    <p class="cart-product-price">Discount <span>-	
                        &#8377;7000</span></p>
                    <p class="cart-product-price">Delivery charges <span>	
                        &#8377;100</span></p>
                    <p class="cart-price-heading" id="price-border-top">TOTAL AMOUNT <span>	
                        &#8377;1100</span></p>
                    <p class="cart-product-price" id="product-price-sm">YOU WILL SAVE 	
                        &#8377;7000 ON THIS ORDER</p>
                    <button class="place-order-button">PLACE ORDER</button>
                </section>
            </div>
        </section>

    </main>
    
    </>
  );
}
