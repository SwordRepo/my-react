import "./App.css";
import { easyfinancialData } from "./component/Data/data";
import Navbar from "./component/NavBar";
import BasicExample from "./component/NavBar/BasicExample";
import Footer from "./component/Footer";
import Accordian from "./component/FooterAccordian/Accordian";
import NavbarTest from "./component/Test/NavbarTest";
import LoanPage from "./component/pages/LoanPage";
import Home from "./component/pages/Home";

function App() {
  return (
    <div className="App">
      <BasicExample data={easyfinancialData.navBar} />
      <Footer data={easyfinancialData.footer} className="sticky-bottom" />
      <Accordian data={easyfinancialData.footer} />
    </div>
  );
}

export default App;
{
  /* <NavbarTest data={easyfinancialData.navBar} /> */
}
{
  /* <Navbar data={easyfinancialData.navBar} /> */
}
{
  /* <Home />
      <LoanPage /> */
}
