import React from "react";

import { Component as Crown } from "../../assets/crown.svg";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HD2YLFUhJONXD16qogfUzemlOUfrQfdE1tCUAvTDqCnA1uCihu9jbAbaXm2EZ3jVJb1DyL9rdTxUB7XGEQ5c2iQ009rX4m4ck";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful !");
  };
  return (
    <StripeCheckout
      style={{ width: "150px" }}
      name="Crwn-clothing lmt."
      stripeKey={publishableKey}
      description={`Your total is $${price}`}
      billingAddress
      shippingAddress
      image={"https://sendeyo.com/up/d/f3eb2117da"}
      panelLabel="Pay Now"
      amount={priceForStripe}
      token={onToken} // === onsuccess callback
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
