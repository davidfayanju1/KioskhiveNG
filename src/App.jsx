import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
import CatchAll from "./pages/404";
import ScrollToTop from "./helper/ScrollToTop";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/*" element={<CatchAll />} />
      </Routes>
    </Router>
  );
}

export default App;
