import "./App.css";
import Footer from "./components/core-ui/Header/Footer/Footer";
import Header from "./components/core-ui/Header/Header/Header";
import Home from "./components/core-view/Home/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
