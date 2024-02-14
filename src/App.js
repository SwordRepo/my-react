import Banner from "./component/Banner";
import FeaturedCard from "./component/FeaturedCard";
import ReviewCards from "./component/ReviewCards";
import { easyfinancialData } from "./component/Data/data";
import Navbar from "./component/NavBar";
function App() {
  return (
    <div className="App">
      <Navbar data={easyfinancialData.navBar} />
      <Banner data={easyfinancialData.banner} />
      <FeaturedCard data={easyfinancialData.featuredCard} />

      <ReviewCards data={easyfinancialData.review} />
    </div>
  );
}

export default App;
