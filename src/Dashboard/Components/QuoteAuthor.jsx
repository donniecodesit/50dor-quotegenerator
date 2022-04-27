import React from "react";

export default function QuoteAuthor({ author, color }) {
  return (
    <div className="quote-author" style={{ color: color }}>
      <span id="author">{author}</span>
    </div>
  );
}
