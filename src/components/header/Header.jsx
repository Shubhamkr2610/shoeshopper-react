import React from "react";
import { Link } from 'react-router-dom'
import "./header.css"

export const Header = () =>{
    return(
        <>
            <div className="nav-container">
                <nav className="nav-heading">
                    <Link to="/" className="brand">
                        <h1 className="brand-name">Shoe-Shoppers</h1>
                    </Link>
                    <div className="nav-search">
                        <input type="text" className="search-input-box" placeholder=" Type to search" />
                        <div className="search-button">
                            <a href="#"><i className="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div className="link-container">


                        <div className="nav-links">
                            <Link to="/"><i className="fa fa-home"></i>Home</Link>
                            <Link to="/ProductPage"  > Products</Link>
                        </div>

                        <div className="nav-icons">
                            <Link to="/Login"  > 
                            <i className="fa fa-user"></i>
                            <span className="nav-icon-text">Login</span>
                            </Link>

                            <Link to="/Wishlist">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                                <span className="nav-icon-text">Wishlist</span>
                            </Link>

                            <Link to="/Cart">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="nav-icon-text">Cart</span>
                            </Link>
                        </div>

                    </div>
                </nav>
            </div>
        </>

    )
}
