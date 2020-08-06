import React from "react";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import "./shop.styles.scss";

const ShopPage = ({ match }) => {
  // since we have a route to here in app.js, it automatically passes down the match, location and history props of IT'S PARENT (not the initial component)
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
