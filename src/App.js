import Banner from "./component/Banner";
import FeaturedCard from "./component/FeaturedCard";
import ReviewCards from "./component/ReviewCards";
import { easyfinancialData } from "./component/Data/data";
import Navbar from "./component/NavBar";
import BasicExample from "./component/NavBar/BasicExample";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      {/* <Navbar data={easyfinancialData.navBar} /> */}
      <BasicExample data={easyfinancialData.navBar} />
      <Banner data={easyfinancialData.banner} />
      <FeaturedCard data={easyfinancialData.featuredCard} />

      <ReviewCards data={easyfinancialData.review} />
      <Footer data={easyfinancialData.footer} />
    </div>
  );
}

export default App;
