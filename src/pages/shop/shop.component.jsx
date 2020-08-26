import React, { useState } from "react";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import WithSpinner from "../../components/spinner/spinner.component";

import "./shop.styles.scss";
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { updateShopArray } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = fireStore.collection("collections");
    // normalWay if not using firebase :
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-clothing-37d83/databases/(default)/documents/collections"
    // )
    //   .then((snapshot) => snapshot.json())
    //   .then((snapshot) => console.log(snapshot));

    // this.unsubscribeFromSnapshot =
    collectionRef.get().then(
      /*onSnapshot(*/
      /*async*/ (snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        console.log(collectionMap);
        updateCollections(collectionMap);
        this.setState({ isLoading: false });
      }
    );
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    // since we have a route to here in app.js, it automatically passes down the match, location and history props of IT'S PARENT (not the initial component)
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateShopArray(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
