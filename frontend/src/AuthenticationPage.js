import { Routes, Route } from "react-router-dom";
import Login from "./components/authentication-page/Login";
import Register from "./components/authentication-page/Register";
import Reset from "./components/authentication-page/Reset";
import BackgroundImage from "./components/authentication-page/BackgroundImage"
import {Box} from "@mui/material"
import Confirmation from "./components/authentication-page/Confirmation";

// Login, Password, Reset Password
export default function AuthenticationPage() {
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="row"
    >
      <BackgroundImage />
      <Box
        display="flex"
        flex="2"
        alignItems="center"
      >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      </Box>
    </Box>
  );
}
