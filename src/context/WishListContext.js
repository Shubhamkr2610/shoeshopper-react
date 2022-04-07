import { createContext, useContext,  useEffect,  useState } from "react";

const WishListContext = createContext(null);

const WishListProvider = ({children}) => {
    
    //-------------------for wishlist------------------------- 
    const [ wishlist, setWishList ] = useState(JSON.parse(localStorage.getItem ("wishlist")));

    //storing product in local storage 
    useEffect(()=> {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    },[wishlist])

 
    //using function adding product to wishlist
    const addToWishList = (product) => {
        setWishList( prev => [...prev, product ] )
    }
    //using function removing product from wishlist
    const removeFromWishList = (id) => {

        setWishList(wishlistProducts => wishlistProducts.filter(item => item._id !== id)  )
    }


    //--------------------for AddToCart------------------------
  
    const [cartItem , setcartItem] = useState(JSON.parse(localStorage.getItem ("cartItem")));

    //storing product in local storage
    useEffect(()=> {
        localStorage.setItem("cartItem", JSON.stringify(cartItem))
    },[cartItem])


      //using function adding product to cart
    const addToCart = (product) => {
        setcartItem( prev => [...prev, product ] )
    }
    
    //using function removing product from wishlist
    const removeFromCart = (id) => {
        setcartItem(wishlistProducts => wishlistProducts.filter(item => item._id !== id)  )
    }

    return(
        <WishListContext.Provider value={{ wishlist, setWishList, addToWishList, removeFromWishList , cartItem , setcartItem , addToCart, removeFromCart}}>
        {children}
        </WishListContext.Provider>
    )
}


//custom hook
const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };