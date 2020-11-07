import React from "react";
import "./cartItem.style.scss";

//{ item: { imageUrl, price, name } } same as  item.imageurl, item.price, itme.name
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name"> {name}</span>
      <span className="price">
        {quantity} x $ {price}
      </span>
    </div>
  </div>
);

export default CartItem;
