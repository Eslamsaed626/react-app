import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
// import logo from "/images/logo.svg";
import Select from "../select/Select";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="top_nav py-3">
        <div className="container-fluid">
          <div className="logo">
            <img src="images/logo.svg" />
          </div>

          <div className="input_search">
            <div className="categore_list">
              <Select></Select>
            </div>
            <input type="text" placeholder="serch in website" />
          </div>

          <div className="icons">
            <Link to="/wishlist" type="button" class=" position-relative icon">
              <div>
                <FontAwesomeIcon icon={faHeart} />
                <span>9</span>
              </div>
              <span>WishList</span>
            </Link>

            <Link to="/cart" type="button" class=" position-relative icon">
              <div>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>9</span>
              </div>
              <span>Cart</span>
            </Link>

            <Link to="/wishlist" type="button" class=" position-relative icon">
              <div>
                <FontAwesomeIcon icon={faUser} />
                <span>9</span>
              </div>
              <span>Account</span>
            </Link>
          </div>
        </div>
      </div>

      <nav>
        <div className="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <button class="navbar-brand" href="#">
                Browse All Categore
              </button>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/about">
                      About
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/shop">
                      Shop
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="vendors">
                      Vendors
                      <i class="fa-solid fa-arrow-down"></i>
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/megamenu">
                      Mega Menu
                    </Link>
                  </li>

                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="#">
                      Pages
                    </Link>
                  </li>
                </ul>
                <div className="services">
                  <FontAwesomeIcon
                    icon={faHeadphones}
                    className="headIcon"
                  ></FontAwesomeIcon>
                  <div className="number">
                    <span>1900 - 888</span>
                    <p className="m-0">24/7 Support Center</p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </>
  );
}
