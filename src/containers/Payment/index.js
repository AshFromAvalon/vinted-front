import "./style.payment.scss";
import { Redirect, useLocation } from "react-router-dom";

const Payment = ({ userToken }) => {
  const location = useLocation();
  console.log(location);
  const { title, price } = location.state;

  return (
    <div className="site-wrap">
      <div className="bckg-payment">
        <div className="checkout-container">
          {title} : {price}
        </div>
      </div>
    </div>
  );
};

export default Payment;
