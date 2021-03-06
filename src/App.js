import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import "./App.scss";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfile,
  addCollectionsAndDocuments,
} from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";
import { selectUserCurrentUser } from "./redux/user/user.selector";
import { selectCollectionForPreview } from "./redux/shop/shop.selector";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log("mounted");
    const { setCurrentUser /*collectionsArray*/ } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: userAuth });
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          //similar to onAuthStateChanged
          setCurrentUser(
            //setState is an asynchronous function so console.log should be placed inside the setState bracket
            {
              id: snapshot.id,
              ...snapshot.data(),
            }
          );
        });
      }
      setCurrentUser(userAuth);
      // addCollectionsAndDocuments(
      //   "collections",
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
    });
  }

  componentWillUnmount() {
    console.log("mounted");
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/Signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
    //the shop route must not be exact because if so, the component won't be rendered if we enter pages like /shop/hats
    //****************************************** */
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectUserCurrentUser,
  collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
//first param = receive props from redux
//second param = dispatch actions in redux
