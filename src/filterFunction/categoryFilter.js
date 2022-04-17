export const categoryFiltered = (product,{Sports , Casual , Formal, Nike, Bata, WoodLand, ShreeLeather,rating }) =>{
    let categoryFilteredProduct = []; 

    if (Sports)
    categoryFilteredProduct = [ 
        ...categoryFilteredProduct, ...product.filter((item) => item.categoryName === "Sports"),
    ];

    if (Casual )
    categoryFilteredProduct = [
        ...categoryFilteredProduct, ...product.filter((item) => item.categoryName === "Casual"),
    ];

    if (Formal)
    categoryFilteredProduct =[ 
        ...categoryFilteredProduct , ...product.filter((item) => item.categoryName === "Formal"),
    ];
    if (Nike)
    categoryFilteredProduct =[ 
        ...categoryFilteredProduct , ...product.filter((item) => item.brand === "Nike"),
    ];
    if (Bata)
    categoryFilteredProduct =[ 
        ...categoryFilteredProduct , ...product.filter((item) => item.brand === "Bata"),
    ];
    if (WoodLand)
    categoryFilteredProduct =[ 
        ...categoryFilteredProduct , ...product.filter((item) => item.brand === "WoodLand"),
    ];
    if (ShreeLeather)
    categoryFilteredProduct =[ 
        ...categoryFilteredProduct , ...product.filter((item) => item.brand === "ShreeLeather"),
    ];

    if(rating){
        categoryFilteredProduct = product.filter(item=> item.rating === rating)
      }

    if (categoryFilteredProduct.length === 0 ) return product;

    return categoryFilteredProduct;
};