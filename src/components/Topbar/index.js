import "./style.topbar.scss";
import logo from "../../assets/images/Vinted_logo.png";

import { Link, useHistory } from "react-router-dom";

const Topbar = ({ userToken, setUserLogCookie }) => {
  const history = useHistory();
  const handleSignout = () => {
    setUserLogCookie(null);
    history.push("/");
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <img className="topbar-logo" src={logo} alt="" />
            <div className="topbar-search">seacrh</div>
          </div>
          <div className="topbar-auth">
            {userToken ? (
              <button onClick={handleSignout} className="btn signout">
                Sign out
              </button>
            ) : (
              <>
                <Link to="/signin/">
                  <button className="btn signin">Sign in</button>
                </Link>
                <Link to="/signup/">
                  <button className="btn signup">Sign up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <div className="topbar-nav-container">
        <div className="topbar-nav">
          <nav>
            <span>Link 1</span>
            <span>Link 2</span>
            <span>Link 3</span>
          </nav>
        </div>
      </div> */}
    </>
  );
};

export default Topbar;
