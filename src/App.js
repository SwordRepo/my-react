import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Banner from "./component/Banner";
import FeaturedCard from "./component/FeaturedCard";

import DemoTwo from "./component/Demo";

function App() {
  return (
    <div className="App">
      <Banner />
      <FeaturedCard />

      <DemoTwo />
    </div>
  );
}

export default App;
