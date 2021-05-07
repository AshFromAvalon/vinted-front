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
  sortPrice,
  setSortPrice,
  children,
}) => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const [placeholder, setPlaceholder] = useState("Chercher");
  const [checked, setChecked] = useState("");

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("Chercher");
  };

  const handleSearchChange = (event) => {
    setSearch(event);
  };

  const handleSortChange = () => {
    setChecked(!checked);
    checked ? setSortPrice("price-asc") : setSortPrice("price-desc");
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
                onChange={(event) => handleSearchChange(event.target.value)}
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
              <div className="topbar-nav-menu-sort">
                <span className="topbar-nav-menu-text">prix croissant</span>
                <input
                  className="topbar-nav-menu-sort-checkbox"
                  type="checkbox"
                  id="switch"
                  checked={checked}
                  onChange={handleSortChange}
                />
                <label htmlFor="switch">Toggle</label>
              </div>
              <div className="topbar-nav-menu-range">
                <span className="topbar-nav-menu-text">price range</span>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
