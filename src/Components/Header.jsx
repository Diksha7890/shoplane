import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/CartPage");
  const count = useSelector((state) => state.cart.carts.length);
  return (
    <>
      <div className="heading">
        <div className="logo">
          <span className="first" style={{ color: "skyblue" }}>
            SHOP
          </span>
          <span>LANE</span>
        </div>
        <div className="right">
          <div class="dropdown">
            <button
              style={{
                color: "black",
                backgroundColor: "white",
                marginRight: "20px",
                marginLeft: "20px",
              }}
              class="btn btn-secondary dropdown-toggle w-100"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span
                class="bi bi-person-circle mx-2"
                style={{ fontSize: "20px" }}
              ></span>
              <b>Login or</b>
              <br />
              Sign up
            </button>
            <ul class="dropdown-menu">
              <li>
                <Link class="dropdown-item" to="/LoginPage">
                  Login
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/signupPage">
                  Sign up
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/FavouritePage">
                  Favourites
                </Link>
              </li>
            </ul>
          </div>
          <div class="cart-icon">
            <i
              class="bi bi-cart3"
              style={{ fontSize: "40px" }}
              onClick={handleClick}
            ></i>
            <span class="badge">{count}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
