import React from "react";
import "./checkout-item.style.scss";
import { connect } from "react-redux";
import { ClearItem, AddItem, RemoveItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(ClearItem(item)),
  addItem: (item) => dispatch(AddItem(item)),
  removeItem: (item) => dispatch(RemoveItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
