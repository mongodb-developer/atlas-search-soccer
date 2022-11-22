import React, { useContext, useEffect, useState } from "react";

import { Link, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

//HOOK
import { UserContext } from "./contexts/CurrentUserContext";

function App() {
  const { user, fetchUser, logOutUser } = useContext(UserContext);
  const [signedUp, setSignedUp] = useState(false);
  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        console.log("FETCHED USER IN APP", fetchedUser);
      }
    }
  };

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar user={user} logOutUser={logOutUser} signedUp={signedUp} />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route
          path="/signup"
          element={<SignUpPage setSignedUp={setSignedUp} />}
        />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </>
  );
}

export default App;
