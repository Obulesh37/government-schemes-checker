import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h1>Government Schemes & Voting Eligibility Checker</h1>
        <p>Check eligibility for Indian government schemes and voting.</p>
        <button onClick={() => navigate("/form")}>
          Check Eligibility
        </button>
      </div>

      <div className="steps">
        <h2>How It Works</h2>
        <div className="step-box">
          <div className="step">1️⃣ Fill Your Details</div>
          <div className="step">2️⃣ System Filters Schemes</div>
          <div className="step">3️⃣ View Results Instantly</div>
        </div>
      </div>
    </div>
  );
}

export default Home;