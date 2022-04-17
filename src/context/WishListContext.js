import { createContext, useContext,  useEffect,  useState } from "react";
import { toast } from 'react-toastify';

const WishListContext = createContext(null);

const WishListProvider = ({children}) => {
     //--------------------for AddToCart------------------------
     const [cartItem , setcartItem] = useState(localStorage.getItem ("cartItem")? JSON.parse(localStorage.getItem("cartItem")):[]);

    //-------------------for wishlist------------------------- 
    const [ wishlist, setWishList ] = useState(localStorage.getItem ("wishlist")? JSON.parse(localStorage.getItem("wishlist")):[]);

    //calculating total price for cart item
    const [ total, setTotal ] = useState(0);

    //storing wishlist product in local storage 
    useEffect(()=> {
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    },[wishlist])

    //using function adding product to wishlist
    const addToWishList = (product) => {

        let isItemExist = wishlist.find(item => item._id === product._id)
        
        if(isItemExist){
            setWishList(prev => prev.map(item => item._id === isItemExist._id ? {...item,quantity: item.quantity+1} : item) )
        }
        else{
            setWishList(prev => [...prev, { ...product, quantity: 1 } ])
        }
        toast.success("Item added to wishlist successfully")
    }
    //using function removing product from wishlist
    const removeFromWishList = (id) => {

        setWishList(wishlistProducts => wishlistProducts.filter(item => item._id !== id)  )
        toast.error("Item removed from wishlist successfully")
    }

   


    const calculateTotal = () => {
        let totalPrice = 0;
        cartItem.map(cartItem => totalPrice += cartItem.discountedPrice * cartItem.quantity)
        setTotal(totalPrice);
        console.log(totalPrice)

    }
    useEffect(()=> {
        calculateTotal();
    },[cartItem])

    //storing cart product in local storage
    useEffect(()=> {
        localStorage.setItem("cartItem", JSON.stringify(cartItem))
    },[cartItem])


    //using function adding product to cart
    const addToCart = (product) => {
    
        let isItemExist = cartItem.find(item => item._id === product._id)

        if(isItemExist){
            setcartItem(prev => prev.map(item => item._id === isItemExist._id ? {...item,quantity: item.quantity+1} : item) )
        }
        else{
            setcartItem(prev => [...prev, { ...product, quantity: 1 } ])
        }

        toast.success("Item adeed to cart successfully")
    }

    //using function removing product from cart
    const removeFromCart = (id) => {
        setcartItem(wishlistProducts => wishlistProducts.filter(item => item._id !== id)  )
        toast.error("Item removed  from cart successfully")
    }


    //increasing quantity of item 
    const increaseQuantity = (_id) => {

        setcartItem(prev => prev.map(item => item._id === _id ? {...item,quantity: item.quantity+1} : item) )

    }
    //decreasing quantity of item 
    const decreaseQuantity = (_id) => {
    
        setcartItem(prev => prev.map(item => item._id === _id ? item.quantity >1 ? {...item,quantity: item.quantity-1} : {...item,quantity: 1} : item) )
    
    }
    
    return(
        <WishListContext.Provider value={{ wishlist, setWishList, addToWishList, removeFromWishList , cartItem , setcartItem , addToCart, removeFromCart,  increaseQuantity ,  decreaseQuantity, total }}>
        {children}
        </WishListContext.Provider>
    )
}


//custom hook
const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };