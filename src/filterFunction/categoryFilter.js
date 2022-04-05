export const categoryFiltered = (product,{Sports , Casual , Formal}) =>{
    let categoryFilteredProduct = []; 

    if (Sports === true)
    categoryFilteredProduct = [ 
        ...categoryFilteredProduct, ...product.filter((item) => item.categoryName === "Sports"),
    ];

    if (Casual === true )
    categoryFilteredProduct = [
        ...categoryFilteredProduct, ...product.filter((item) => item.categoryName === "Casual"),
    ];

    if (Formal === true)
    categoryFilteredProduct =[ 
        ...categoryFilteredProduct , ...product.filter((item) => item.categoryName === "Formal"),
    ];

    if (categoryFilteredProduct.length === 0 ) return product;

    return categoryFilteredProduct;
};