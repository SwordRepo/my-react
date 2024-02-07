import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Banner from "./component/Banner";
import FeaturedCard from "./component/FeaturedCard";
import ReviewCards from "./component/ReviewCards";

function App() {
  return (
    <div className="App">
      <Banner />
      <FeaturedCard />

      <ReviewCards />
    </div>
  );
}

export default App;
