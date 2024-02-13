import React, { useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS if needed
import imgs from "./images/logo.png"

export default function Nav(props) {
  const {  menus, btn } = props.data;
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`container navbar bg-white  ${
        mobileMenuOpen ? "mobile-open" : ""
      }`}
    >
      <div className="d-flex align-items-center">
         
      
      <div className="navbar-header ">
        <img src={imgs} className="nav-logo"  />
        <button
          className="mobile-menu-btn d-sm-block d-md-none d-lg-none"
          onClick={handleMobileMenuToggle}
        >
          ☰
        </button>
      </div>

     
      <ul className={` menu-list ${mobileMenuOpen ? "mobile-open" : ""}`}>
        {menus.map((menu) => (
          <li
            key={menu.menu}
            className={`menu-item ${activeMenu === menu.menu ? "active" : ""}`}
            onMouseEnter={() => handleMenuHover(menu.menu)} // Changed onClick to onMouseEnter
            onMouseLeave={() => setActiveMenu(null)} // Hide submenu on mouse leave
          >
            {menu.menu}
            {/* Render submenu if the current menu is active */}
            {activeMenu === menu.menu && (
              <ul className="sub-menu">
                {menu.subMenus.map((subMenu) => (
                  <li className="sub-menu-item" key={subMenu.submenu}>
                    {subMenu.submenu}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="">
<a href="#" className="btn btn-primary fw-bold my-4 btn-nav">
        {btn}
      </a>
      </div>
      </div>
    </nav>
  );
}
