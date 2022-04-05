import React from 'react'
import "./wishlist.css"
import { casual4, } from 'asset'

export const Wishlist = () => {
  return (
    <>
     <p class="ecomm-wishlist-title"> Your wishlist</p>
    <div class="ecomm-wishlist-container">
        {/* <!-------------card variants----------------------> */}
        <div class="card-vertical">
            <div class="card-vertical-header">
                <span class="status-badge">In stock</span>
                <span class="badge-dismiss"> <i class="fa fa-heart" aria-hidden="true"></i></span>
            </div>
            <img src={ casual4} alt="shoe image" class="card-vertical-img" />
            <h1 class="card-head">Nike airforce </h1>
            <p class="card-text">Designed by Bruce Kilgore and introduced in 1982</p>
            <div class="card-vertical-footer">
                <span class="current-price">
                    <strong>₹500</strong>
                </span>
                <span class="earlier-price">₹2000</span>
                <span class="price-off">(75% off)</span>
            </div>
            <div class="footer-button">
                <button class="primary-button">Remove from wishlist</button>
                <button class="primary-button">Move to cart</button>
            </div>
        </div>

        {/* <!-------------card variants----------------------> */}
        <div class="card-vertical">
            <div class="card-vertical-header">
                <span class="status-badge">In stock</span>
                <span class="badge-dismiss"> <i class="fa fa-heart" aria-hidden="true"></i></span>
            </div>
            <img src={casual4} alt="shoe image" class="card-vertical-img" />
            <h1 class="card-head">Nike airforce </h1>
            <p class="card-text">Designed by Bruce Kilgore and introduced in 1982</p>
            <div class="card-vertical-footer">
                <span class="current-price">
                    <strong>₹500</strong>
                </span>
                <span class="earlier-price">₹2000</span>
                <span class="price-off">(75% off)</span>
            </div>
            <div class="footer-button">
                <button class="primary-button">Remove from wishlist</button>
                <button class="primary-button">Move to cart</button>
            </div>
        </div>
        {/* <!-------------card variants----------------------> */}
        <div class="card-vertical">
            <div class="card-vertical-header">
                <span class="status-badge">In stock</span>
                <span class="badge-dismiss"> <i class="fa fa-heart" aria-hidden="true"></i></span>
            </div>
            <img src={casual4} alt="shoe image" class="card-vertical-img" />
            <h1 class="card-head">Nike airforce </h1>
            <p class="card-text">Designed by Bruce Kilgore and introduced in 1982</p>
            <div class="card-vertical-footer">
                <span class="current-price">
                    <strong>₹500</strong>
                </span>
                <span class="earlier-price">₹2000</span>
                <span class="price-off">(75% off)</span>
            </div>
            <div class="footer-button">
                <button class="primary-button">Remove from wishlist</button>
                <button class="primary-button">Move to cart</button>
            </div>
        </div>
    </div>
    </>
  );
}
