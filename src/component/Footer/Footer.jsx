import React from "react";
import "./style.css";

export default function Footer(props) {
  const {link,logo1,logo2,logoContent,logo3,logo4,menus} = props.data
  return <div className="container-fluid foot-cont">Footer
  <div className="contanier">
{
  menus.map((m)=>
  <ul>
    <li>{m.menu}</li>
  </ul>)
}
  </div>
  </div>;
}

 
