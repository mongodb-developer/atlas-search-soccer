import React, { useContext } from "react";

import { Link, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

//HOOK
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { useCurrentUser } from "./contexts/CurrentUserContext";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </>
  );
}

export default App;
