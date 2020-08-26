import React from "react";

import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.reselect";
import { selectUserCurrentUser } from "../../redux/user/user.selector";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";

const Header = ({ currentUser, hideCartDropdown }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>

      {currentUser ? ( //the as jsx attribute tells what the html tag this element should be
        <OptionLink /*OptionDiv*/ as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink /*OptionDiv*/>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hideCartDropdown ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = /*(state) => ({*/ createStructuredSelector({
  currentUser: selectUserCurrentUser /*(state)*/,
  hideCartDropdown: selectCartHidden /*(state)*/,
  /* })*/
});

export default connect(mapStateToProps)(Header);
