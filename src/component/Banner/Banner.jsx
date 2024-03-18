import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "../button/Button";
import img from "./images/Bann.avif";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Banner(props) {
  // Destructure dataContent and titledata from props.data
  const { dataContent, titledata, button,refText } = props.data || {};
console.log(props.data,"pp")
  // Render the titledata if available
  const title = titledata ? documentToReactComponents(titledata.json) : null;

  // Render the dataContent if available and it's an array
  const content =
    dataContent && dataContent.json && Array.isArray(dataContent.json.content)
      ? documentToReactComponents(dataContent.json)
      : null;

  // Render the button if available
  const buttonContent = button ? button : null;
   const referenceText = refText ? refText : null;


  return (
    <div className="container-fluid img-container p-0">
      {/* Image taking full width */}
      <img src={img} className="img-banner" alt="Banner" />

      <div className="container">
        <div className="hero-banner">
          <div className="text-dec">
            {/* Render the title if available */}
            {title && <h1 className="text_img">{content}</h1>}
            {title}
          </div>
         
            {/* Render the button if available */}
            {buttonContent && (
             <div className="btn-banner">
            <a href="#" className="btn  banner-btn fw-bold my-lg-4  btn-btn">
              {buttonContent}
            </a>
          </div>
            )}
             <p className="banner-footer-text">{referenceText}</p>
          
        </div>
      </div>
    </div>
  );
}

