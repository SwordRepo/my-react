import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { easyfinancialData } from "./component/Data/data";
import BasicExample from "./component/NavBar/BasicExample";

import LoanPage from "./component/pages/LoanPage";
import Home from "./component/pages/Home";
import WrapperContainer from "./component/pages/WrapperContainer";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <BasicExample data={easyfinancialData.navBar} /> */}
        {/* <Home /> */}
        <WrapperContainer>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/loan" element={<LoanPage />} />
          </Routes>
        </WrapperContainer>
      </div>
    </Router>
  );
}

export default App;
