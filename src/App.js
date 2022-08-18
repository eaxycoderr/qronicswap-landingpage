import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/core-ui/Header/Footer/Footer";
import Header from "./components/core-ui/Header/Header/Header";
import {Farming} from "./components/core-view/Farming/Farming";
import Home from "./components/core-view/Home/Home";
import { StakingPool } from "./components/core-view/StakingPool/StakingPool";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farms" element={<Farming />} />
        <Route path="/stake" element={<StakingPool />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
