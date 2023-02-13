import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto ">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
