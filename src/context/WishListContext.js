import { createContext, useContext,  useEffect,  useState } from "react";

const WishListContext = createContext(null);

const WishListProvider = ({children}) => {
    
    const [ wishlist, setWishList ] = useState(JSON.parse(localStorage.getItem ("wishlist")));


    //storing product in local storage 
    useEffect(()=> {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    },[wishlist])

 
    //using function adding product to cart
    const addToWishList = (product) => {
        setWishList( prev => [...prev, product ] )
    }
    //using function removing product from cart
    const removeFromWishList = (id) => {

        setWishList(wishlistProducts => wishlistProducts.filter(item => item._id !== id)  )
    }
    
    return(
        <WishListContext.Provider value={{ wishlist, setWishList, addToWishList, removeFromWishList }}>
        {children}
        </WishListContext.Provider>
    )
}


//custom hook
const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };