import "./ProductCard.css";
import {add,remove}from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const {id,name, price, image} = product;
  const dispatch=useDispatch( state=>state.cartState.cartList);
  const cartList = useSelector((state) => state.cartState.cartList);
  const[isInCart,setisInCart]=useState(false);

  useEffect(()=>{
   const productInCart= cartList.find(item=>item.id===id);
   if (productInCart){
    setisInCart(true);
   }
    else{
      setisInCart(false);
    }

   
  },[cartList])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button onClick={() => dispatch(remove(product))}>Remove</button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
}
