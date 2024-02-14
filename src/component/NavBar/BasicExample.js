import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample(props) {
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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">
          <img src={logo} className="nav-logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#link">
              <ul
                className={` menu-list ${mobileMenuOpen ? "mobile-open" : ""}`}
              >
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
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex justify-content-end text-dec">
          <a href="#" className="btn btn-primary fw-bold my-4 btn-nav">
            {btn}
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
