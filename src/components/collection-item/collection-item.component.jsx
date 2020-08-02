import React from "react";

import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

import "./collection-item.styles.scss";

import Button from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ background: `url(${imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">$ {price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
