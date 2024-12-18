import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import CatchAll from "./pages/404";
import ScrollToTop from "./helper/ScrollToTop";
import Signup from "./pages/Signup";
import Wholesaler from "./pages/Manufacturer";
import Retailer from "./pages/Retailer";
import Manufacturer from "./pages/Manufacturer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/manufacturer" element={<Manufacturer />} />
        <Route path="/signup/retailer" element={<Retailer />} />

        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/*" element={<CatchAll />} />
      </Routes>
    </Router>
  );
}

export default App;
