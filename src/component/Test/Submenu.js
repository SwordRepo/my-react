// Submenu.js
import React from "react";

const Submenu = ({ submenu }) => {
  return (
    <a className="dropdown-item" href={submenu.url}>
      {submenu.submenu}
    </a>
  );
};

export default Submenu;
