import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import schemes from "../data/schemes";   // ✅ CORRECT PATH
import SchemeCard from "../components/SchemeCard";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state;

  // If page refreshed and no data exists
  if (!user) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>No data found</h2>
        <button onClick={() => navigate("/form")}>
          Go Back to Form
        </button>
      </div>
    );
  }

  // Filter eligible schemes
  const eligibleSchemes = schemes.filter((scheme) => {
    return (
      user.age >= scheme.minAge &&
      user.income <= scheme.maxIncome &&
      (!scheme.occupation || scheme.occupation === user.occupation) &&
      (!scheme.gender || scheme.gender === user.gender) &&
      (!scheme.category || scheme.category === user.category)
    );
  });

  const votingEligible = user.age >= 18;

  return (
    <div className="result-container">

      {/* Voting Eligibility Card */}
      <div className="voting-card">
        <h2>Voting Eligibility</h2>
        {votingEligible ? (
          <p className="success">
            You are eligible to vote in India 🇮🇳
          </p>
        ) : (
          <p className="error">
            You are not eligible to vote yet. Minimum age is 18.
          </p>
        )}
      </div>

      <h2>Eligible Government Schemes</h2>

      {eligibleSchemes.length > 0 ? (
        eligibleSchemes.map((scheme, index) => (
          <SchemeCard key={index} scheme={scheme} />
        ))
      ) : (
        <p>No eligible schemes found based on your details.</p>
      )}

    </div>
  );
}

export default Result;