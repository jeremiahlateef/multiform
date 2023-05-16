import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./ContextApp";
import Step1 from "./components/Step1";
import Step4 from "./components/Step4";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <Step1 />
      <Step4 />
    </ContextProvider>
  </React.StrictMode>
);
