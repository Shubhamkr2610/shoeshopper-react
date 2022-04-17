import { CartCard } from 'components/cart-card/CartCard';
import { useWishList } from 'context/WishListContext';
import React ,{useEffect , useState} from 'react'
import "./cart.css"

export const Cart = () => {

    const {cartItem , total} = useWishList();

    // const { cart, total } = useWish();
    const [ totalQuantity, setTotalQuantity ] = useState(0);
    const quantityHandler = () => {
      let qty = 0;
      cartItem.map(cartItem => qty += cartItem.quantity)
      setTotalQuantity(qty);
  }
  useEffect(()=> {
      quantityHandler();
  },[cartItem])

  return (
    <>
    <div className='cart-wrapper'>
    {cartItem.length === 0 ? <p className="ecomm-cart-title">Your cart is empty</p>: 
    <>
    <p className="ecomm-cart-title"> Your Cart</p>
     <main className="cart-page-container">
        <div className="ecomm-card-container" >

        {cartItem.map(({ _id,brand, title, discountedPrice, actualPrice, discountoff, srcimg, rating, quantity}) => (<CartCard key={_id} 
                    _id = {_id} brand = {brand } title = {title } discountedPrice = { discountedPrice } actualPrice = {actualPrice} discountoff = {discountoff}  srcimg ={srcimg} rating={rating} quantity = {quantity}/>))}

        </div>
    
            {/* <!----------------cart price section---------------------> */}
        <section className="price-checkout-container">
            <div>
                <section className="cart-price-container">
                    <p className="cart-price-heading">PRICE DETAILS </p>
                    <p className="cart-product-price">Price({totalQuantity} items) <span>	
                        &#8377;{total}</span></p>
                    <p className="cart-product-price">Discount <span>-	
                        &#8377;1000</span></p>
                    <p className="cart-product-price">Delivery charges <span>	
                        &#8377;100</span></p>
                    <p className="cart-price-heading" id="price-border-top">TOTAL AMOUNT <span>	
                        &#8377;{total -100 +100}</span></p>
                    <p className="cart-product-price" id="product-price-sm">YOU WILL SAVE 	
                        &#8377;900 ON THIS ORDER</p>
                    <button className="place-order-button">PLACE ORDER</button>
                </section>
            </div>
        </section>
    
    </main>
    </>
    }
    </div>
    </>
  );
}
