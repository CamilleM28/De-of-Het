import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getNouns } from "./services/nounService";
import axios from "axios";

import FoodList from "./components/FoodList";
import TravelList from "./components/TravelList";
import AnimalList from "./components/AnimalList";
import PeopleList from "./components/PeopleList";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Favourites from "./components/Favourites";

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
      const response = await axios.get(`/api/profile/${id}`);
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
                <h1>login</h1>
                <Login profileDetails={profileDetails} />
              </>
            }
          />
          <Route
            path="home"
            element={
              <>
                <Header />
                <Profile profile={profile} getProfile={getProfile} />
                <FoodList nouns={nouns} id={id} setProfile={setProfile} />
                <TravelList nouns={nouns} id={id} setProfile={setProfile} />
                <AnimalList nouns={nouns} id={id} setProfile={setProfile} />
                <PeopleList nouns={nouns} id={id} setProfile={setProfile} />
              </>
            }
          />
          <Route
            path="/favourites"
            element={
              <>
                <Header />
                <Favourites nouns={nouns} profile={profile} id={id} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
