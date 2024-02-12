import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Banner from "./component/Banner";
import FeaturedCard from "./component/FeaturedCard";
import ReviewCards from "./component/ReviewCards";
import { reviewData } from "./component/ReviewCards/data";
function App() {
  return (
    <div className="App">
      <Banner />
      <FeaturedCard />

      <ReviewCards data={reviewData} />
    </div>
  );
}

export default App;
