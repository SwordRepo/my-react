import React from "react";
import "./style.css";
export default function value(props) {
  const { head, subHead, values, data } = props.data;
  return (
    <div className="container-fluid container-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 content-column">
            <h1 className="heading">{head}</h1>
            <h3 className="subHead">{subHead}</h3>
            <div className="row mb-5">
              {values.map((v, index) => (
                <div
                  className={`col-4  ${
                    index !== values.length - 1 ? "row-border" : ""
                  }`}
                  key={index}
                >
                  <h1 className="valueDta text-center">{v.valueDta}</h1>
                  <p className="valueContent text-center">{v.valueContent}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {data.map((d, index) => {
              const uniqueClassName =
                index === 0 ? "data-rounded-one" : "data-rounded-two";

              return (
                <div
                  className={`rounded-circle ${uniqueClassName}`}
                  key={index}
                >
                  <h1 className="data1 text-center">
                    {d.data1.split("in").map((part, partIndex, array) => (
                      <span key={partIndex}>
                        {partIndex > 0 && (
                          <strong style={{ fontSize: "70px" }}>in</strong>
                        )}
                        {part}
                      </span>
                    ))}
                  </h1>
                  <p className="data2 text-center">{d.data2}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
