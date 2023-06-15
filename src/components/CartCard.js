import "./CartCard.css";
import { useDispatch } from "react-redux";
import {remove} from "../store/cartSlice";
export const CartCard = ({product}) => {
  const {name, price, image} = product;
  const dipatch=useDispatch();

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={()=>dipatch(remove((product)))}>Remove</button>
      </div>
  )
}
