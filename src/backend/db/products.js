import { v4 as uuid } from "uuid";
import { cartimg1, cartimg2 } from "asset";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title:"Designed by Bruce Kilgore and introduced in 1982" ,brand:"Nike airforce" , 
    discountedPrice: 500, 
    actualPrice: 2000,
    discountoff:"(75% off)",
    srcimg : cartimg1,
  },
  {
    _id: uuid(),
    title:"Designed by Bruce Kilgore and introduced in 1982" ,brand:"Nike airforce" , 
    discountedPrice:"₹500", 
    actualPrice:"₹2000",
    discountoff:"(75% off)",
    srcimg: cartimg2,
  },
  {
    _id: uuid(),
    title:"Designed by Bruce Kilgore and introduced in 1982" ,brand:"Nike airforce" , 
    discountedPrice:"₹500", 
    actualPrice:"₹2000",
    discountoff:"(75% off)",
    srcimg: cartimg1,
  },
 
];
