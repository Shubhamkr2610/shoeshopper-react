import React from 'react'
import { useWishList } from 'context/WishListContext';
import "./wishlist.css"
import { ProductCard } from 'components';

export const Wishlist = () => {
    const {wishlist} = useWishList()
  return (
    <>
  
        <div className='wishlist-wrapper'>

            {wishlist.length === 0 ? <p className='ecomm-wishlist-title'>Your wishlist is empty </p> : <> <p className="ecomm-wishlist-title"> Your wishlist</p>
                <div className="ecomm-wishlist-container">

                    {wishlist.map(({ _id,brand, title, discountedPrice, actualPrice, discountoff, srcimg, rating}) => (<ProductCard
                    _id = {_id} brand = {brand } title = {title } discountedPrice = { discountedPrice } actualPrice = {actualPrice} discountoff = {discountoff}  srcimg ={srcimg} rating={rating} />))}

                </div>
            </>
            }
        </div>
    </>

   
  );
}
