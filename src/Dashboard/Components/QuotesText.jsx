import React from "react";

export default function QuotesText({ quote, color }) {
  return (
    <div className="quote-text" style={{ color: color }}>
      <span id="text">{quote}</span>
    </div>
  );
}
