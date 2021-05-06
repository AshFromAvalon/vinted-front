import "./style.signup.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const axios = require("axios");

const Signup = ({ setUserLogCookie }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const myApi = "https://react-vinted-back.herokuapp.com/user/sign-up";
  const ReacteurApi = "https://lereacteur-vinted-api.herokuapp.com/user/signup";

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = async () => {
      try {
        const response = await axios.post(ReacteurApi, {
          username: username,
          email: email,
          phone: "00000000",
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
      <div className="signup-container">
        <h2>Sign up</h2>
        <form
          action="#"
          className="signup-form"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            type="text"
            placeholder="username"
            className="signup-form-input"
          />
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="email adress"
            className="signup-form-input"
          />
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="password"
            className="signup-form-input"
          />
          <input
            type="submit"
            value="Validate"
            className="signup-form-submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
