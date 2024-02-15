import React from "react";
import "./style.css";

export default function Footer(props) {
  const { footerContent } = props.data;
  console.log(props, "props");
  return (
    <div className="container-fluid foot-cont">
      <div className="container paddedContainer">
        <div className="row">
          <div className="col-2">test</div>
          <div class="col-10 row">
            {footerContent.map((menu) => (
              <div className="col-3 d-flex justify-content-around">
                <li key={menu.menu} className="list-style">
                  <div className="menu-li-list ">{menu.menu}</div>

                  <ul className="p-0">
                    {menu.subMenus.map((subMenu) => (
                      <li className="sub-list mb-3" key={subMenu.submenu}>
                        {subMenu.submenu}
                      </li>
                    ))}
                  </ul>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
