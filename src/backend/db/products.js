import { v4 as uuid } from "uuid";
import { casual1, casual2, casual3, casual4, formal1, formal2, formal3, formal4, sport1, sport2, sport3, sport4 } from "asset";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    categoryName: "Sports",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Nike", 
    discountedPrice: 500, 
    actualPrice: 2000,
    discountoff:"(75% off)",
    rating: 2.5,
    srcimg : sport1,
  },
 
  {
    _id: uuid(),
    categoryName: "Sports",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Nike ", 
    discountedPrice: 1000, 
    actualPrice: 2000,
    discountoff:"(50% off)",
    rating: 3.5,
    srcimg : sport2,
  },
 
  {
    _id: uuid(),
    categoryName: "Sports",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Nike " , 
    discountedPrice: 1500, 
    actualPrice: 2000,
    discountoff:"(25% off)",
    rating: 4.5 ,
    srcimg : sport3,
  },
 
  {
    _id: uuid(),
    categoryName: "Sports",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Nike " , 
    discountedPrice: 1000, 
    actualPrice: 4000,
    discountoff:"(75% off)",
    rating: 3.5,
    srcimg : sport4,
  },
 
  {
    _id: uuid(),
    categoryName: "Casual",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Nike " , 
    discountedPrice: 2000, 
    actualPrice: 4000,
    discountoff:"(50% off)",
    rating: 4,
    srcimg : casual1,
  },
 
  {
    _id: uuid(),
    categoryName: "Casual",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Nike " , 
    discountedPrice: 3000, 
    actualPrice: 4000,
    discountoff:"(25% off)",
    rating: 3,
    srcimg : casual2,
  },
 
  {
    _id: uuid(),
    categoryName: "Casual",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Nike " , 
    discountedPrice: 500, 
    actualPrice: 1000,
    discountoff:"(50% off)",
    rating: 3.5,
    srcimg : casual3,
  },
 
  {
    _id: uuid(),
    categoryName: "Casual",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Nike " , 
    discountedPrice: 750, 
    actualPrice: 1000,
    discountoff:"(25% off)",
    rating: 4.5,
    srcimg : casual4,
  },
 
  {
    _id: uuid(),
    categoryName: "Formal",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Nike " , 
    discountedPrice: 250, 
    actualPrice: 1000,
    discountoff:"(75% off)",
    rating: 3.5,
    srcimg : formal1,
  },
 
  {
    _id: uuid(),
    categoryName: "Formal",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"Bata" , 
    discountedPrice: 500, 
    actualPrice: 2000,
    discountoff:"(75% off)",
    rating: 2.5,
    srcimg : formal2,
  },
 
  {
    _id: uuid(),
    categoryName: "Formal",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"WoodLand" , 
    discountedPrice: 1000, 
    actualPrice: 2000,
    rating: 4.5,
    discountoff:"(50% off)",
    srcimg : formal3,
  },
 
  {
    _id: uuid(),
    categoryName: "Formal",
    title:"Designed by Bruce Kilgore and introduced in 1982" ,
    brand:"ShreeLeather" , 
    discountedPrice: 1500, 
    actualPrice: 2000,
    rating: 4,
    discountoff:"(25% off)",
    srcimg : formal4,
  },
];
