//** @format */

import Header from "./components/Header.js";
import CandyContainer from "./components/CandyContainer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header headingText="Indianapolis Chocolate Candy Shop" />
      <h2>Choose Your Favorite Candy!</h2>

      <CandyContainer />
    </div>
  );
}

export default App;