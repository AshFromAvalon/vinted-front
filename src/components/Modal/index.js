import "./style.modal.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const axios = require("axios");

const Modal = ({ showModal, setShowModal, setUserLogCookie }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  const disableSubmit =
    username && email && password
      ? "signup-form-submit"
      : "signup-form-submit disabled";

  const isDisabled = !username || !email || !password;

  const myApi = "https://react-vinted-back.herokuapp.com/user/sign-up";
  const ReacteurApi = "https://lereacteur-vinted-api.herokuapp.com/user/signup";

  const history = useHistory();

  const handleClose = () => {
    setShowModal(false);
  };

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
    handleClose();
  };
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="close">
          <button onClick={handleClose}>X</button>
        </div>
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
              className={disableSubmit}
              disabled={isDisabled}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
