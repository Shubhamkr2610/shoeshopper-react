import { v4 as uuid } from "uuid";
import { casual1, formal1, sport1 } from "asset";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sports",
    image: sport1
  },
  {
    _id: uuid(),
    categoryName: "Casual",
    image: casual1
  },
  {
    _id: uuid(),
    categoryName: "Formal",
    image: formal1
  },
  
];
