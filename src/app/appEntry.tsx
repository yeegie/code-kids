import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "@app/providers/Provider";
import "@app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);
