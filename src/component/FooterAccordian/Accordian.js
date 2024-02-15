import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./style.css";
function Accordian(props) {
  const { footerContent } = props.data;

  // Specify the menus you want to include in the Accordion
  const menusToInclude = ["LOANS", "ABOUT US", "HELP"];

  // Filter the footerContent based on the specified menus
  const filteredContent = footerContent.filter((menu) =>
    menusToInclude.includes(menu.menu)
  );

  return (
    <div className="accordian-componnet">
      <Accordion defaultActiveKey="0">
        {filteredContent.map((menu, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              <div className="col-3 d-flex ">
                <li key={menu.menu} className="li-menu">
                  <div>{menu.menu}</div>
                </li>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="p-0">
                {menu.subMenus.map((subMenu, subIndex) => (
                  <li className="li-menu1 mb-3" key={subIndex}>
                    {subMenu.submenu}
                  </li>
                ))}
              </ul>
              {/* Add additional content here if needed */}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Accordian;
