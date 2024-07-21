import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "@app/providers/Provider";
import "@app/styles/main.scss";

import { FilterProvider } from "@features/contexts/filter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <Provider />
    </FilterProvider>
  </React.StrictMode>
);
