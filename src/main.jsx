// main.jsx

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "../src/styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//homepage import
import HomePage from "./pages/HomePage";

// rendering the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
