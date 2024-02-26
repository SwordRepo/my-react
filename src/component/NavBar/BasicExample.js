import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Spin as Hamburger } from "hamburger-react";

export default function BasicExample(props) {
  const { menus, btn, logo } = props.data;
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSubMenuHovered, setIsSubMenuHovered] = useState(false);
  const [isOpen, setOpen] = useState(false);
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
        <div>
          <Navbar.Toggle
            icon={
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                style={{
                  backgroundColor: "green",
                  color: "blue",
                  border: "none",
                  textDecoration: "none",
                  marginTop: "2px",
                }}
              />
            }
          />

          <Navbar.Brand as={Link} to="/">
            <img src={logo} className="nav-logo" alt="Logo" />
          </Navbar.Brand>
        </div>

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
                        <div className="sub-menu-wrapper">
                          {menu.subMenus.map((subMenu) => {
                            // Construct the route path based on the submenu name
                            const routePath = `/path/${subMenu.submenu}`;

                            return (
                              <li
                                className="sub-menu-item"
                                key={subMenu.submenu}
                              >
                                {/* Use Link to navigate to the specified route */}
                                <Link to={"/loan"} className="sub-menu-link">
                                  {subMenu.submenu}
                                </Link>
                              </li>
                            );
                          })}
                        </div>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex justify-content-lg-end  justify-content-sm-between justify-content-md-between">
          <a href="#" className="btn btn-primary fw-bold my-4 btn-nav  btn-btn">
            {btn}
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
