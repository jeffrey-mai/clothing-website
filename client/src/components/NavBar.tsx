import { useEffect } from "react";
import searchIcon from "../assets/search-icon.png";
import cartIcon from "../assets/my-cart.png";
import accountIcon from "../assets/account-icon.png";
import logo from "../assets/logo.png";
import { useAuth } from "../AuthProvider";

const NavBar = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const currentUrl = window.location.href;
    const navBar = document.querySelector<HTMLElement>("#navBar");
    const searchIcon = document.querySelector<HTMLElement>(".searchIcon");
    const accountIcon = document.querySelector<HTMLElement>(".accountIcon");
    const cartIcon = document.querySelector<HTMLElement>(".cartIcon");

    if(navBar && searchIcon && accountIcon && cartIcon){
      if (currentUrl === "http://localhost:8081/cart") {
        navBar.style.backgroundColor = "white";
        navBar.style.color = "black";
        navBar.style.borderBottom = "1px solid black";
        searchIcon.style.filter = "invert(0%)";
        accountIcon.style.filter = "invert(0%)";
        cartIcon.style.filter = "invert(0%)";
      }
  
      window.addEventListener("scroll", function () {
        if (window.scrollY > 0 || currentUrl === "http://localhost:8081/cart") {
          navBar.style.backgroundColor = "white";
          navBar.style.color = "black";
          navBar.style.borderBottom = "1px solid black";
          searchIcon.style.filter = "invert(0%)";
          accountIcon.style.filter = "invert(0%)";
          cartIcon.style.filter = "invert(0%)";
        } else {
          navBar.style.backgroundColor = "";
          navBar.style.color = "white";
          navBar.style.borderBottom = "";
          searchIcon.style.filter = "invert(100%)";
          accountIcon.style.filter = "invert(100%)";
          cartIcon.style.filter = "invert(100%)";
        }
      });
    }
  }, []);

  return (
    <div className="navBar" id="navBar">
      <div className="navBar_categories">
        <a href="http://localhost:8081/men">Men</a>
        <a href="http://localhost:8081/women">Women</a>
        <a href="http://localhost:8081/electronics">Electronics</a>
        <a href="http://localhost:8081/jewleries">Jewleries</a>
        <img className="searchIcon" src={searchIcon} />
        <a>Search</a>
      </div>
      <a className="navName" href="http://localhost:8081">
        <img src={logo} />
        Clothing Store
      </a>
      <div className="navTab">
        {!isAuthenticated ? (
          <a href="http://localhost:8081/account" className="account">
            <img className="accountIcon" src={accountIcon} />
            <p>Sign In</p>
          </a>
        ) : (
          <>
            <a href="http://localhost:8081/account" className="account">
              <img className="accountIcon" src={accountIcon} />
              <p>Account</p>
            </a>
            <a href="http://localhost:8081/account" className="account">
              <img className="accountIcon" src={accountIcon} />
              <p>My Orders</p>
            </a>
          </>
        )}
        <a href="http://localhost:8081/cart" className="myCart">
          <img className="cartIcon" src={cartIcon} />
          <p>My Cart</p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
