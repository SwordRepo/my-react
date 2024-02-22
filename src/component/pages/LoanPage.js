import React from "react";
import Benefits from "./PersonalLoan/BenefitsPL/Benefits";
import LoanDetails from "./PersonalLoan/PersonalLoan/LoanDetails";
import Value from "./PersonalLoan/Value";
import { easyfinancialData } from "../Data/data";

export default function LoanPage() {
  return (
    <div>
      <LoanDetails data={easyfinancialData.personalLoan} />
      <Benefits data={easyfinancialData.benefitsPL} />
      <Value data={easyfinancialData.value} />
    </div>
  );
}
