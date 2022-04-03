import React from 'react'
import './CategoryCard.css'

export const CategoryCard = ({title, categoryImage}) => {
  return (
    <>
        <div className="men-product">
            <img src={categoryImage} alt="men-shoe-img" className="shoe-category"/>
            <p className="category-text">{title}</p>
        </div>
        
    </>
  )
}
