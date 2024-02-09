import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import LandingPage from "./LandingPage";

export default function App() {
 return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthenticationPage />} />
        <Route path="/landing/*" element={<LandingPage />} />
      </Routes>
    </Router>
 );
}