import { useHeader } from "context/HeaderContext";
import { useWishList } from "context/WishListContext";
import React from "react";
import { Link } from 'react-router-dom'
import "./header.css"

export const Header = () =>{

    const { wishlist } = useWishList();
    

    return(
        <>
            <div className="nav-container">
                    <Link to="/" className="ecomm-brand">
                        <h1 className="ecomm-brand-name">Shoe-Shoppers</h1>
                    </Link>

                    <div className="nav-search">
                        <input type="text" className="search-input-box" placeholder=" Type to search" />

                        <div className="search-button">
                            <a href="#"><i className="fa fa-search"></i></a>
                        </div>
                    </div>

                    <div className="ecomm-link-container">
                        <div class="ecomm-icon mt ">
                            <Link to="/"  className="coloring">
                            <i class="fas fa-home badge-icon"></i>
                            <div className="nav-icon-text">Home</div>
                            </Link>
                        </div> 

                        <div class="ecomm-icon mt">
                            <Link to="/Login"  className="coloring" > 
                            <i class="fas fa-user badge-icon"></i>
                            <div className="nav-icon-text">Login</div>
                            </Link>
                        </div>  

                        <div class="ecomm-icon mt">
                            <Link to="/Wishlist"  className="coloring">
                            <i class="fas fa-heart badge-icon">
                            <h5 class="symbol">{ wishlist.length }</h5></i>
                            <div className="nav-icon-text">Wishlist</div> 
                            </Link>
                        </div>

                        <div class="ecomm-icon mt">
                            <Link to="/Cart" className="coloring" >
                            <i class="fas fa-shopping-cart badge-icon">
                            <h5 class="symbol">0</h5></i>
                            <div className="nav-icon-text">Cart</div>
                            </Link>
                        </div>

                    </div>
            </div>
        </>

    )
}
