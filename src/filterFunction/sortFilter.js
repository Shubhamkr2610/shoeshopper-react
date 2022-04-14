export const getPriceWishFilter = (product, sortBy) => {
    if (sortBy === "LOW_TO_HIGH")
      return product.sort(( a, b) => a.discountedPrice - b.discountedPrice );

    if (sortBy === "HIGH_TO_LOW")
      return product.sort((a, b) => b.discountedPrice - a.discountedPrice );
      
    return product;
}