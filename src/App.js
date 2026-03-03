import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EligibilityForm from "./pages/EligibilityForm";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<EligibilityForm />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;