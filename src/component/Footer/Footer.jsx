import React from "react";
import "./style.css";

export default function Footer(props) {
  const {
    footerContent,
    heading,
    facebookLogo,
    instagramLogo,
    content,
    goeasyLogo,
    googlePlay,
    appleLogo,
  } = props.data;
  console.log(props, "props");
  return (
    <div className="container-fluid foot-cont footer--pin">
      <div className="container paddedContainer">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-sm-12">
            <p className="menu-li-list">{heading}</p>
            <div className="row col-4">
              <img className="col-3 col-sm-6" src={facebookLogo} alt="" />
              <img className="col-3 col-sm-6" src={instagramLogo} alt="" />
            </div>
            <div className="row pt-3">
              <p className="col-6 easyContent col-sm-12">{content}</p>
              <img
                className="col-6 goeasyLogo col-sm-12"
                src={goeasyLogo}
                alt=""
              />
            </div>

            <img className="col-6  mt-2" src={appleLogo} alt="" />
          </div>
          <div class="col-9 row footerLink">
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
