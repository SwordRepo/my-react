import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample(props) {
  const { menus, btn, logo } = props.data;
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };
  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">
          <img src={logo} className="nav-logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-xl-center">
            <Nav.Link href="#link">
              <ul className="menu-list">
                {menus.map((menu) => (
                  <li
                    key={menu.menu}
                    className="menu-item fw-bold"
                    onMouseEnter={() => handleMenuHover(menu.menu)} // Show submenu on hover
                    onClick={() => handleMenuClick(menu.menu)} // Toggle submenu on click
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
            <div className="d-flex justify-content-lg-end text-dec justify-content-sm-between justify-content-md-between  ">
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

export default BasicExample;
