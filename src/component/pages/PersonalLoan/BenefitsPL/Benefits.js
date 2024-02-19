import React from "react";
import "./style.css";
import Button from "../../../button/Button";
export default function Benefits(props) {
  const { name, block, btn } = props.data;
  return (
    <div className="container-fluid backgroundContainer">
      <div className="container padded-container">
        <h2 className="benefitsHead text-center"> {name}</h2>
        <div className="row">
          {block.map((b, index) => (
            <div className="col-12 row paddedContainer" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="col-6">
                    <img src={b.img} className="img-container" />
                  </div>
                  <div className="col-5 img-left-content">
                    <h3 className="imgHead">{b.imgHead}</h3>
                    <p className="imgContent">{b.imgContent}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-5 img-right-content">
                    <h3 className="imgHead">{b.imgHead}</h3>
                    <p className="imgContent">{b.imgContent}</p>
                  </div>
                  <div className="col-6 ">
                    <img src={b.img} className="img-container" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button btnName={btn} />
        </div>
      </div>
    </div>
  );
}
