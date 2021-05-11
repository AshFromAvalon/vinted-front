import "./style.signin.scss";

// Dependencies
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const Signin = ({ setUserLogCookie }) => {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useHistory();

  // End points
  const myApi = "https://react-vinted-back.herokuapp.com/user/login";
  const ReacteurApi = "https://lereacteur-vinted-api.herokuapp.com/user/login";

  // Call server to log user in
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(ReacteurApi, {
        email: email,
        password: password,
      });
      setUserLogCookie(response.data.token);

      // Redirect user based on the previous action
      if (location.state.fromPublishCta) {
        history.push("/publish/");
      } else if (location.state.fromProductCta) {
        history.push("/payment/", {
          title: location.state.title,
          price: location.state.price,
          description: location.state.description,
          offerId: location.state.offerId,
        });
      } else {
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="site-wrap">
      <div className="signin-container">
        <h2>Sign in</h2>
        <form
          action="#"
          className="signin-form"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="email adress"
            className="signin-form-input"
          />
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="password"
            className="signin-form-input"
          />
          <input type="submit" value="Sign in" className="signin-form-submit" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
