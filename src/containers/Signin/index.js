import "./style.signin.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const axios = require("axios");

const Signin = ({ setUserLogCookie }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const myApi = "https://react-vinted-back.herokuapp.com/user/login";
  const ReacteurApi = "https://lereacteur-vinted-api.herokuapp.com/user/login";

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = async () => {
      try {
        const response = await axios.post(ReacteurApi, {
          email: email,
          password: password,
        });
        setUserLogCookie(response.data.token);
        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    postData();
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
