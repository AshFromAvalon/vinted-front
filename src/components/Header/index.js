import "./style.header.scss";

// Dependencies
import tearSvg from "../../assets/images/tear.42d6cec6.svg";
import { Link, useHistory } from "react-router-dom";

const Header = ({ userToken }) => {
  const history = useHistory();
  const handleClick = () => {
    userToken
      ? history.push("/publish/")
      : history.push("/signin/", {
          fromPublishCta: true,
        });
  };

  return (
    <div className="header-bg">
      <img src={tearSvg} alt="" className="tear-svg" />
      <div className="header-container">
        <div className="header-box">
          <div className="header-box-content">
            <span className="header-box-content-tagline">
              Prêts à faire du tri dans vos placards ?
            </span>
            <button onClick={handleClick} className="header-box-content-cta">
              Commencer à vendre
            </button>
            <span className="header-box-content-about">
              Découvrir comment ça marche
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
