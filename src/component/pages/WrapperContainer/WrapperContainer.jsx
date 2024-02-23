import React from "react";

import { easyfinancialData } from "../../Data/data";
import BasicExample from "../../NavBar/BasicExample";
import Footer from "../../Footer/Footer";
import Accordian from "../../FooterAccordian/Accordian";

export default function WrapperContainer({ children }) {
  return (
    <div>
      {/* Header */}
      <header>
        {/* Render your header content here */}
        <BasicExample data={easyfinancialData.navBar} />
      </header>

      {/* Main content */}
      <main>
        {/* Render the children components inside the main content */}
        {children}
      </main>

      {/* Footer */}
      <footer>
        {/* Render your footer content here */}
        <Footer data={easyfinancialData.footer} className="sticky-bottom" />
      </footer>
    </div>
  );
}
