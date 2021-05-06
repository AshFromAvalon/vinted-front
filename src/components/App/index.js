import "./style.app.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Containers
import Home from "../../containers/Home/index";
import Product from "../../containers/Product/index";
import Signup from "../../containers/Signup/index";
// Components
import Topbar from "../Topbar/index";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/signup/">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
