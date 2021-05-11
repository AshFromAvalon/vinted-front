import "./style.checkout.scss";

// Dependencies
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const Checkout = ({ title, price, description, offerId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit} className="checkout-form">
        <h2 className="checkout-form-order-title ">
          Récapitulatif de votre commande
        </h2>
        <div className="checkout-form-order">
          <div className="checkout-form-order-info">
            <p className="checkout-form-text">Prix:</p>
            <p className="checkout-form-order-info-content">
              {price.toFixed(2).replace(".", ",")} €
            </p>
          </div>
          <div className="checkout-form-order-info">
            <p className="checkout-form-text">Produit: </p>{" "}
            <p className="checkout-form-order-info-content">{title}</p>
          </div>
          {description && (
            <div className="checkout-form-order-info">
              <p className="checkout-form-text">Description: </p>{" "}
              <p className="checkout-form-order-info-content">{description}</p>
            </div>
          )}
        </div>
        <div className="checkout-form-order-info">
          <p className="checkout-form-text">Total: </p>{" "}
          <p className="checkout-form-order-info-content">
            {price.toFixed(2).replace(".", ",")} € ttc
          </p>
        </div>

        <div className="checkout-form-card">
          <p className="checkout-form-text">Entez vos informations</p>
          <CardElement />
          <div className="border"></div>
        </div>
        <button className="checkout-cta">Valider le paiement</button>
      </form>
    </div>
  );
};

export default Checkout;
