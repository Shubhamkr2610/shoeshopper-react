import React, { useEffect, useState } from 'react';
import './productPage.css'
import { Sidebar, ProductCard } from 'components';



export const ProductPage = () => {

    const[ product , setProduct] = useState([])
    useEffect(()=>{
        fetch ('/api/products')
    .then(res=>res.json())
    .then(data=>setProduct(data.products))
    }, [])
    return (
        <>
            <main className="main-ecomm-container">
                <Sidebar />
                {product.map(item=><ProductCard title={item.title} brand={item.brand} discountedPrice={item.discountedPrice} actualPrice={item.actualPrice} discountoff={item.discountoff} srcimg={item.srcimg} />)}
            </main>
        </>
    );
};