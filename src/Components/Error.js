import React from "react";
import "./Error.css";

const Error = ({ error }) => {
  return (
    <div className="error">
      <h3>{error}</h3>
    </div>
  );
};

export default Error;
