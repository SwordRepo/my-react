import React, { useState } from "react";
import "./Navbar.css"; // Make sure to import your CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS if needed

export default function Nav(props) {
  const { logo, menus, btn } = props.data;
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`container navbar bg-white ${
        mobileMenuOpen ? "mobile-open" : ""
      }`}
    >
      {/* Logo */}
      <div className="navbar-header">
        <img src={logo} alt="Logo" />
        <button
          className="mobile-menu-btn d-sm-block d-md-none d-lg-none"
          onClick={handleMobileMenuToggle}
        >
          ☰
        </button>
      </div>

      {/* Main Menu */}
      <ul className={`menu-list ${mobileMenuOpen ? "mobile-open" : ""}`}>
        {menus.map((menu) => (
          <li
            key={menu.menu}
            className={`menu-item ${activeMenu === menu.menu ? "active" : ""}`}
            onClick={() => handleMenuClick(menu.menu)}
          >
            {menu.menu}
          </li>
        ))}
      </ul>

      {/* Sub Menu */}
      {activeMenu && (
        <ul
          className={`menu-list sub-menu ${
            mobileMenuOpen ? "mobile-open" : ""
          }`}
        >
          {menus
            .filter((menu) => menu.menu === activeMenu)
            .map((menu) => (
              <li key={menu.menu}>
                <ul className="menu-list">
                  {menu.subMenus.map((subMenu) => (
                    <li className="menu-item" key={subMenu.submenu}>
                      {subMenu.submenu}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      )}

      {/* Call-to-Action Button */}
      <a href="#" className="btn btn-primary fw-bold my-4 btn-nav">
        {btn}
      </a>
    </nav>
  );
}
