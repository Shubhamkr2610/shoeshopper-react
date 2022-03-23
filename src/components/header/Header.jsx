import React from "react";
import "./header.css"
import { Link } from 'react-router-dom'

export const Header = () =>{
    return(
        <>
            <div class="nav-container">
                <nav class="nav-heading">
                    <Link to="/" class="brand">
                        <h1 class="brand-name">Shoe-Shoppers</h1>
                    </Link>
                    <div class="nav-search">
                        <input type="text" class="search-input-box" placeholder=" Type to search" />
                        <div class="search-button">
                            <a href="#"><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="link-container">


                        <div class="nav-links">
                            <Link to="/"><i class="fa fa-home"></i>Home</Link>
                            <Link to="/Products"  > Products</Link>
                        </div>

                        <div class="nav-icons">
                            <Link to="/Login"  > 
                            <i class="fa fa-user"></i>
                            <span class="nav-icon-text">Login</span>
                            </Link>

                            <Link to="/Wishlist">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                                <span class="nav-icon-text">Wishlist</span>
                            </Link>

                            <Link to="/Cart">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="nav-icon-text">Cart</span>
                            </Link>
                        </div>

                    </div>
                </nav>
            </div>
        </>

    )
}
