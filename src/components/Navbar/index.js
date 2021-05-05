import "./style.topbar.scss";
import logo from "../../assets/images/Vinted_logo.png";

const Navbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <img className="topbar-logo" src={logo} alt="" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
