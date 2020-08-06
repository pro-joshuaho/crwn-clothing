import React from "react";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../preview-collection/preview-collection.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ data }) => {
  return (
    <div className="collections-preview">
      {data.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
