import "./style.app.scss";

// Dependencies
import Cookies from "js-cookie";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import Home from "../../containers/Home/index";
import Product from "../../containers/Product/index";
import Signin from "../../containers/Signin/index";

// Components
import Slider from "../Slider/index";
import Topbar from "../Topbar/index";
import Modal from "../Modal/index";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [sortPrice, setSortPrice] = useState("price-asc");
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(40);

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
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
      >
        <Slider
          min={0}
          max={100}
          minVal={minVal}
          maxVal={maxVal}
          setMinVal={setMinVal}
          setMaxVal={setMaxVal}
        />
      </Topbar>
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
        <Route path="/slider/">
          <Slider />
        </Route>
        <Route path="/">
          <Home
            search={search}
            sortPrice={sortPrice}
            minVal={minVal}
            maxVal={maxVal}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
