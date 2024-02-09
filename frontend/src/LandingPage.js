import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/landing-page/scenes/global/Topbar";
import Sidebar from "./components/landing-page/scenes/global/Sidebar";
import Dashboard from "./components/landing-page/scenes/dashboard";
import Team from "./components/landing-page/scenes/team";
import Contacts from "./components/landing-page/scenes/contacts";
import Form from "./components/landing-page/scenes/form";
import Calendar from "./components/landing-page/scenes/calendar";
import FAQ from "./components/landing-page/scenes/faq";
import Bar from "./components/landing-page/scenes/bar";
import Line from "./components/landing-page/scenes/line";
import Geography from "./components/landing-page/scenes/geography";
import { ColorModeContext, useMode } from "./theme";
import "./index.css";

export default function LandingPage() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="" element={<Dashboard />} />
              <Route path="team" element={<Team />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="form" element={<Form />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="bar" element={<Bar />} />
              <Route path="line" element={<Line />} />
              <Route path="geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
