import React, {useReducer } from 'react';
import { Sidebar, ProductCard } from 'components';
import { useProduct } from 'context/ProductContext';
import { getPriceWishFilter } from 'filterFunction/sortFilter';
import { reducer } from 'reducer/filterReducer';
import './productPage.css'
import { categoryFiltered } from 'filterFunction/categoryFilter';
// import { toast } from 'react-toastify';

export const ProductPage = () => {

        const { product } = useProduct()
        const [state, dispatch] = useReducer(reducer, {
            sortBy: ""  ,
            Sports: false,
            Casual: false,
            Formal: false,
            Nike: false,
            Bata: false,
            WoodLand: false,
            ShreeLeather: false,
            rating: 0,
            
        });

        const categoryFilteredProduct = categoryFiltered( product, state, state.sortBy);
        

        const PriceWishFilter = getPriceWishFilter( categoryFilteredProduct, state.sortBy
          );

    
    return (
        <>
            <main className="main-ecomm-container">

{/* <button onClick={()=>toast.error("check")}>button</button> */}
                <Sidebar dispatch={dispatch} state={state}  />
                <div className='product-wrapper'>
 
                   {PriceWishFilter.map(item=><ProductCard key={item._id}   _id={item._id } title={item.title} brand={item.brand} discountedPrice={item.discountedPrice} actualPrice={item.actualPrice} discountoff={item.discountoff} srcimg={item.srcimg} rating= {item.rating} />)}
                   
                </div>
            </main>
        </>
    );
};