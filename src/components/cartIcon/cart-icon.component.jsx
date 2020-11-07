import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import "./cart-icon.style.scss";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, totalQuantity }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{totalQuantity}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  totalQuantity: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
