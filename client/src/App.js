import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getNouns } from "./services/nounService";
import axios from "axios";

import NounList from "./components/NounList";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [nouns, setNouns] = useState(null);
  const [id, setId] = useState("");
  const [profile, setProfile] = useState({});

  const profileDetails = (data) => {
    setId(data);
  };

  useEffect(() => {
    async function getWords() {
      if (!nouns) {
        const response = await getNouns();
        setNouns(response);
      }
    }

    getWords();
  }, [nouns]);

  async function getProfile() {
    if (profile.username === undefined) {
      const response = await axios.get(`/api/profile/` + id);
      setProfile(response.data);
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <>
                  <h1>login</h1>
                </>
                <Login profileDetails={profileDetails} />
              </>
            }
          />
          <Route
            path="home"
            element={
              <>
                <Profile profile={profile} getProfile={getProfile} />
                <NounList nouns={nouns} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
