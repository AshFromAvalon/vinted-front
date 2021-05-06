import "./style.topbar.scss";
import logo from "../../assets/images/Vinted_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Link, useHistory } from "react-router-dom";

const Topbar = ({ userToken, setUserLogCookie }) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

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
            <Link to="/">
              <img className="topbar-logo" src={logo} alt="" />
            </Link>
            <div className="topbar-search">
              <div className="search-icon">{searchIcon}</div>
              <input
                type="text"
                className="topbar-search-input"
                value="Search"
              />
            </div>
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
        <div className="top-navbar">
          <div className="topbar-nav-container">
            <div className="topbar-nav-menu">
              <nav>
                <span>Link 1</span>
                <span>Link 2</span>
                <span>Link 3</span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
