import React from 'react'
import "./landingPage.css"
import { Link } from 'react-router-dom'
import { casual1, formal1, shoeMain, sport1 } from '../../asset'
import { CategoryCard } from '../../components/category-card/CategoryCard'

export const LandingPage = () => {
  return (
    <>
        <div className="ecomm-tagline">
        <p>MORE <strong>STYLES</strong>  TO SEE, MORE <strong>SHOPPING</strong>  TO DO </p>
    </div>
    <div className="img-container">
        <img className="main-img" src={shoeMain} alt="shoe-image"/>
        <div className="brand-title">
            <p id="title">Cool and Casual.</p>
            <p>Comfort and flexiblity </p>
                <p>like no other.</p>
           
            <Link to="/ProductPage" className="shop-button" > Shop Now</Link>
        </div>
    </div>

    <p className="product-categories-head">Product categories</p>
    <section className="product-categories">

        <CategoryCard categoryImage={sport1} title="Sports" />
        <CategoryCard categoryImage={casual1} title="Casual" />
        <CategoryCard categoryImage={formal1} title="Formal" />
        
    </section>
    </>
  )
}

