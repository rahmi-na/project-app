import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 md:px-0">
        <Navbar />

        <div className="lg:mx-40">
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
