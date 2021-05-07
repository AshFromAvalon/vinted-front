import "./style.topbar.scss";
import logo from "../../assets/images/Vinted_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Topbar = ({
  userToken,
  setUserLogCookie,
  setShowModal,
  search,
  setSearch,
}) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const [placeholder, setPlaceholder] = useState("Chercher");

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("Chercher");
  };

  const handleChange = (event) => {
    setSearch(event);
    console.log(search);
  };

  const history = useHistory();
  const handleSignout = () => {
    setUserLogCookie(null);
    history.push("/");
  };

  const handleShowModal = () => {
    setShowModal(true);
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
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(event) => handleChange(event.target.value)}
              />
            </div>
          </div>
          <div className="topbar-auth">
            {userToken ? (
              <button onClick={handleSignout} className="btn signout">
                Déconnecter
              </button>
            ) : (
              <>
                <Link to="/signin/">
                  <button className="btn signin">Se connecter</button>
                </Link>
                <button className="btn signup" onClick={handleShowModal}>
                  S'inscrire
                </button>
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
