import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function BasicExample(props) {
  const { menus, btn, logo } = props.data;
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSubMenuHovered, setIsSubMenuHovered] = useState(false);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleSubMenuHover = () => {
    setIsSubMenuHovered(true);
  };

  const handleSubMenuLeave = () => {
    setIsSubMenuHovered(false);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="nav-logo" alt="Logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-baseline">
            <Nav.Link href="#link">
              <ul
                className="menu-list"
                onMouseLeave={() => setActiveMenu(null)}
              >
                {menus.map((menu) => (
                  <li
                    key={menu.menu}
                    className="menu-item fw-bold"
                    onMouseEnter={() => handleMenuHover(menu.menu)} // Show submenu on hover
                    onClick={() => handleMenuClick(menu.menu)} // Toggle submenu on click
                  >
                    {menu.menu}
                    {activeMenu === menu.menu && (
                      <ul
                        className="sub-menu fw-normal"
                        onMouseEnter={handleSubMenuHover}
                        onMouseLeave={handleSubMenuLeave}
                      >
                        {menu.subMenus.map((subMenu) => {
                          // Construct the route path based on the submenu name
                          const routePath = `/${menu.menu
                            .toLowerCase()
                            .replace(" ", "-")}/${subMenu.submenu
                            .toLowerCase()
                            .replace(" ", "-")}`;

                          return (
                            <li className="sub-menu-item" key={subMenu.submenu}>
                              {/* Use Link for navigation */}
                              {subMenu.submenu}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Nav.Link>
            <div className="d-flex justify-content-lg-end text-dec justify-content-sm-between justify-content-md-between">
              <a href="#" className="btn btn-primary fw-bold my-4 btn-nav">
                {btn}
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
