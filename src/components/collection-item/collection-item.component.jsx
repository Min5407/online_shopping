import React from "react";
import "./collection-item.style.scss";
import { Button } from "../button/button.component";
import { connect } from "react-redux";
import { AddItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, AddItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <Button onClick={() => AddItem(item)} addToCart>
        Add To Cart
      </Button>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
