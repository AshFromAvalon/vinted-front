import "./style.checkout.scss";

// Dependencies
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const Checkout = ({ title, price, description, offerId }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  // End points
  const ReacteurApi = "https://lereacteur-vinted-api.herokuapp.com/payment";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: title,
      });
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(ReacteurApi, {
        token: stripeToken,
        title: title,
        amount: price * 100,
      });
      console.log(response.data);
      if (response.data.status === "succeeded") {
        setIsCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
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
        {isCompleted ? (
          <div className="succeeded">Paiement effectué</div>
        ) : (
          <button className="checkout-cta">Valider le paiement</button>
        )}
      </form>
    </div>
  );
};

export default Checkout;
