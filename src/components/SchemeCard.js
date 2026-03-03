import React from "react";

function SchemeCard({ scheme }) {
  return (
    <div className="card">
      <h3>{scheme.name}</h3>
      <p><strong>Description:</strong> {scheme.description}</p>
      <p><strong>Benefits:</strong> {scheme.benefits}</p>
      <a href={scheme.website} target="_blank" rel="noreferrer">
        Visit Official Website
      </a>
    </div>
  );
}

export default SchemeCard;