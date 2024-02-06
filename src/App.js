import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Banner from "./component/Banner";
import FeaturedCard from "./component/FeaturedCard";
import ReviewCard from "./component/ReviewCard";
import DemoTwo from "./component/Demo";

function App() {
  return (
    <div className="App">
      <Banner />
      <FeaturedCard />
      <ReviewCard />
      <DemoTwo />
    </div>
  );
}

export default App;
