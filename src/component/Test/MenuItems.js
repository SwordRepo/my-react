import React from "react";

const MenuItems = ({ menuItem }) => {
  const { menu, subMenus } = menuItem;
  {
    console.log(subMenus);
  }
  return (
    <li className="nav-item dropdown">
      <a
        class="nav-link"
        id="navbarDropdown"
        // role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {menu}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {subMenus.map((submenu) => (
          <a className="dropdown-item">{submenu.submenu}</a>
        ))}
      </div>
    </li>
    // <li class="nav-item dropdown">
    //   <a
    //     class="nav-link dropdown-toggle"
    //     href="#"
    //     id="navbarDropdown"
    //     role="button"
    //     data-toggle="dropdown"
    //     aria-haspopup="true"
    //     aria-expanded="false"
    //   >
    //     Dropdown
    //   </a>
    //   <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    //     <a class="dropdown-item" href="#">
    //       Action
    //     </a>
    //     <a class="dropdown-item" href="#">
    //       Another action
    //     </a>
    //     <div class="dropdown-divider"></div>
    //     <a class="dropdown-item" href="#">
    //       Something else here
    //     </a>
    //   </div>
    // </li>
  );
};

export default MenuItems;
