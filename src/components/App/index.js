import "./style.app.scss";

// Dependencies
import Cookies from "js-cookie";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import Home from "../../containers/Home/index";
import Product from "../../containers/Product/index";
import Signup from "../../containers/Signup/index";
import Signin from "../../containers/Signin/index";
// Components
import Topbar from "../Topbar/index";
import Modal from "../Modal/index";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const setUserLogCookie = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 14 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Topbar
        userToken={userToken}
        setUserLogCookie={setUserLogCookie}
        setShowModal={setShowModal}
        search={search}
        setSearch={setSearch}
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setUserLogCookie={setUserLogCookie}
      />
      <Switch>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/signin/">
          <Signin setUserLogCookie={setUserLogCookie} />
        </Route>
        <Route path="/">
          <Home search={search} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
