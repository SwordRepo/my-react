import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarTest(props) {
  const { menus, logo, btn } = props.data;

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ backgroundColor: "blue", color: "white" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="nav-logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle-navBar"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menus.map((menuItem, index) => (
              <NavDropdown
                key={index}
                title={menuItem.menu}
                id={`nav-dropdown-${index}`}
                className="menu-item submenu-container"
                // Add your custom styles here
              >
                {menuItem.subMenus.map((submenu, subIndex) => (
                  <NavDropdown.Item
                    key={subIndex}
                    href={`#${submenu.submenu}`}
                    // style={{ backgroundColor: "green", color: "white" }}
                  >
                    {submenu.submenu}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
