import "./style.app.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../../containers/Home/index";
import Product from "../../containers/Product/index";
import Navbar from "../../components/Navbar/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
