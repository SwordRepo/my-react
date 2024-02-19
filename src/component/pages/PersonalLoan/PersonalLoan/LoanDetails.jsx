import React from "react";
import "./style.css";

export default function LoanDetails(props) {
  const { loanData } = props.data;

  return (
    <div className="container-fluid loan-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 left-container left-container-border">
            {loanData.map((loan, loanIndex) => (
              <div key={loanIndex}>
                <h1 className="loan-head p-0">{loan.loanName}</h1>
                {loan.terms &&
                  loan.terms.map((term, termIndex) => (
                    <div className="row py-2" key={termIndex}>
                      <h3 className="col-6 term mb-2 ">{term.term}:</h3>
                      <h3 className="col-6 term-value mb-2 text-end p-0">
                        {term.value}
                      </h3>
                      <hr className="term-line m-0" />
                    </div>
                  ))}
                <p className="loan-content p-0">
                  <strong>{loan.content}</strong>
                </p>
                <p>
                  <strong>
                    {" "}
                    <a href="" className="link-loan">
                      {loan.link}
                    </a>
                  </strong>
                  <span className="linkContent"> {loan.linkContent}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 text-center col-loan-right">
            {loanData.map((loan, loanIndex) => (
              <div key={loanIndex} className="row">
                <h2 className="loan-sub-head p-0">{loan.name}</h2>
                <div className=" col-6 col-md-12 col-lg-12 row pt-4">
                  {loan.logos &&
                    loan.logos.map((logo, logoIndex) => (
                      <div
                        className="col-sm-6 col-md-4 col-lg-4"
                        key={logoIndex}
                      >
                        <img src={logo.logo} alt={`Logo ${logoIndex}`} />
                      </div>
                    ))}
                </div>
                <div className="col-6 col-md-12 col-lg-12  row">
                  {loan.contents &&
                    loan.contents.map((content, contentIndex) => (
                      <div
                        className="col-sm-6 col-md-4 col-lg-4"
                        key={contentIndex}
                      >
                        <h3 className="loan-logo-content text-center">
                          {content}
                        </h3>
                      </div>
                    ))}
                </div>
                {/* {loan.contents &&
                  loan.contents.map((content, contentIndex) => (
                    <p key={contentIndex}>{content}</p>
                  ))} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
