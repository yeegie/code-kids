import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "@app/layouts";
import { HomePage } from "@pages/home";

export default function Provider() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}
