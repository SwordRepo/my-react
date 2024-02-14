import React, { useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS if needed
import imgs from "./images/logo.png";

export default function Nav(props) {
  const { menus, btn, logo } = props.data;
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log("mobile working");
  };

  return (
    <div
      className={`container bg-white navbar-content   ${
        mobileMenuOpen ? "mobile-open" : ""
      }`}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="navbar-header ">
          <button
            className="mobile-menu-btn d-sm-block d-md-none d-lg-none"
            onClick={handleMobileMenuToggle}
          >
            ☰
          </button>
          <img src={logo} className="nav-logo" />
        </div>

        <div>
          <ul className={` menu-list ${mobileMenuOpen ? "mobile-open" : ""}`}>
            {menus.map((menu) => (
              <li
                key={menu.menu}
                className={`menu-item fw-bold ${
                  activeMenu === menu.menu ? "active" : ""
                }`}
                onMouseEnter={() => handleMenuHover(menu.menu)} // Changed onClick to onMouseEnter
                onMouseLeave={() => setActiveMenu(null)} // Hide submenu on mouse leave
              >
                {menu.menu}
                {/* Render submenu if the current menu is active */}
                {activeMenu === menu.menu && (
                  <ul className="sub-menu fw-normal ">
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
        </div>

        <div className="">
          <a href="#" className="btn btn-primary fw-bold my-4 btn-nav">
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
}
