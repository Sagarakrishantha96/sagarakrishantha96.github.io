import React from "react";
import ReactDOM from "react-dom/client";
// Global styles load before App so component styles can override them.
import "./styles.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
