import React from 'react'
import "./landingPage.css"
import{ img1, img2, img3, img4, img5, img6, img7} from "../../asset/index.js"
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <>
        <div class="ecomm-tagline">
        <p>MORE <strong>STYLES</strong>  TO SEE, MORE <strong>SHOPPING</strong>  TO DO </p>
    </div>
    <div class="img-container">
        <img class="main-img" src={img1} alt="shoe-image"/>
        <div class="brand-title">
            <p id="title">Cool and Casual.</p>
            <p>Comfort and flexiblity </p>
                <p>like no other.</p>
           
            <Link to="/Products" class="shop-button" > Shop Now</Link>
        </div>
    </div>


    <p class="product-categories-head">Product categories</p>
    <section class="product-categories">

            <div class="men-product">
                <img src={img2} alt="men-shoe-img" class="shoe-category"/>
                <p class="category-text">Men</p>
            </div>
            <div class="women-product">
                <img src={img3} alt="women-shoe-img" class="shoe-category"/>
                <p class="category-text">women</p>
            </div>
            <div class="kid-product">
                <img src={img4} alt="kid-shoe-img" class="shoe-category"/>
                <p class="category-text">Kid</p>
            </div>
       

    </section>

    <p class="product-categories-head">Our Trending Styles</p>

    <section class="product-categories">

            <div class="men-product">
                <img src={img5} alt="men-shoe-img" class="shoe-category"/>
                <p class="category-text">Slides For You</p>
            </div>
            <div class="women-product">
                <img src={img6} alt="women-shoe-img" class="shoe-category"/>
                <p class="category-text">Women's Boots</p>
            </div>
            <div class="kid-product">
                <img src={img7} class="shoe-category"/>
                <p class="category-text">Styles That Work</p>
            </div>
       

    </section>

    </>
  )
}

