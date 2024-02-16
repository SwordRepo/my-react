import React from "react";
import "./style.css";

export default function LoanDetails(props) {
  const { loanData } = props.data;

  return (
    <div className="container-fluid loan-container">
      <div className="container">
        <div className="row">
          <div className="col-6 left-container left-container-border">
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
                      <hr className="term-line" />
                    </div>
                  ))}
                <p className="loan-content p-0">{loan.content}</p>
                <p>{loan.linkContent}</p>
              </div>
            ))}
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
}
