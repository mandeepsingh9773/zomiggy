import { useState } from "react";
import FoodFireLogo from "../../Images/zomiggy-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className="header font-custom ">
      <a href="/">
        <img
          className="logo bg-black"
          src={FoodFireLogo}
          alt="Zomiggy Logo"
          title="Zomiggy"
        />
      </a>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" class="no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" class="no-underline">
              About
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
