import React from "react";

import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

import {
  CollectionFooter,
  Image,
  CollectionButton,
  CollectionFooterName,
  CollectionFooterPrice,
  CollectionItemContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <Image className="image" imageUrl={imageUrl}></Image>
      <CollectionFooter>
        <CollectionFooterName>{name}</CollectionFooterName>
        <CollectionFooterPrice>$ {price}</CollectionFooterPrice>
      </CollectionFooter>
      <CollectionButton
        inverted
        className="custom-button"
        onClick={() => addItem(item)}
      >
        ADD TO CART
      </CollectionButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
