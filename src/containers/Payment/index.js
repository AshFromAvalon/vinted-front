import "./style.payment.scss";

// Dependencies
import { Redirect, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Components
import Checkout from "../../components/Checkout/index";

const Payment = ({ userToken }) => {
  const location = useLocation();
  const { title, price, description, offerId } = location.state;

  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

  return (
    <div className="site-wrap">
      <div className="bckg-payment">
        <Elements stripe={stripePromise}>
          <Checkout
            title={title}
            price={price}
            description={description}
            offerId={offerId}
          />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
