import React from "react";
import img1 from "./images/ban5.webp";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Banner(props) {
  const {
    img,
    bannerHeader,
    bannerSubHeader,
    bannerBtn,
    bannerText,
    bannerHeaderline,
  } = props.data;
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-12 col-md-6 text-dec">
    //       <div className="text-dec">
    //         <h1 className="text_img ">
    //           {bannerHeader}
    //           <strong className="bannerHeaderline">{bannerHeaderline}</strong>
    //         </h1>
    //       </div>

    //       <p className="fs-2 text-primary">{bannerSubHeader}</p>

    //       <a href="#" className="banner-btn btn btn-primary fw-bold my-4 ">
    //         {bannerBtn}
    //       </a>
    //       <p className="banner-footer-text">{bannerText}</p>
    //     </div>
    //     <div className="col-12 col-md-6">
    //       <img src={img1} className="img-banner" alt="Logo" />
    //     </div>
    //   </div>
    // </div>
     <div className="container-fluid  p-0">
      {/* Image taking full width */}
      <img
        src={img1} className="img-banner"
        alt="Logo"
        
       
      />

     <div className="container">
<div className="hero-banner">
       <div className="text-dec">
            <h1 className="text_img ">
               {bannerHeader}
               <strong className="bannerHeaderline">{bannerHeaderline}</strong>
            </h1>
          </div>

           <p className="fs-2 text-primary">{bannerSubHeader}</p>

           <a href="#" className="banner-btn btn btn-primary fw-bold my-4 ">
             {bannerBtn}
          </a>
           <p className="banner-footer-text">{bannerText}</p>
      </div>
     </div>
      
    </div>
  );
}
