import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
