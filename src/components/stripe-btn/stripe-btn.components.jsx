import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutBtn = ({ price }) => {
  // stripe wants price in cents instead of dollars
  const priceInCents = price * 100;
  const publishableKey = "pk_test_GkwsT2BOQZPek5PGfa6WVRwu00SJxbcDVv";

  const onToken = (token) => {
    //  console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="react-onlineShopping LTD"
      publishableKey={publishableKey}
      billingAddress
      shippingAddress
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutBtn;
