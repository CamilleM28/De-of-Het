import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { getNouns } from "./services/nounService";
import axios from "axios";

import Login from "./components/Login";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Favourites from "./components/Favourites";
import Category from "./components/Category";

function App() {
  const [nouns, setNouns] = useState(null);
  const [id, setId] = useState("");
  const [profile, setProfile] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();
  const [questionTracker, setQuestionTracker] = useState([6, 7, 8]);

  console.log(questionTracker);

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

  function updateFavs() {
    async function getFavs() {
      setLoading(true);
      const response = await axios.get(`/api/profile/${id}`);
      setFavourites(response.data.favourites);
      setLoading(false);
    }
    getFavs();
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
                <Header updateFavs={updateFavs} setCategory={setCategory} />
                <Profile profile={profile} getProfile={getProfile} />
                <Category
                  setCategory={setCategory}
                  nouns={nouns}
                  id={id}
                  setProfile={setProfile}
                  getProfile={getProfile}
                  questionTracker={questionTracker}
                  setQuestionTracker={setQuestionTracker}
                />
                {/* <h2>{category}</h2> */}
              </>
            }
          />
          <Route
            path="/category"
            element={
              <>
                <Link to="/home">
                  <button> Home</button>
                </Link>
                <h2>{category}</h2>
              </>
            }
          />
          <Route
            path="/favourites"
            element={
              <>
                <Header setCategory={setCategory} />
                {loading ? <h2>Loading current favourites...</h2> : null}
                <Favourites
                  nouns={nouns}
                  profile={profile}
                  id={id}
                  favourites={favourites}
                  updateFavs={updateFavs}
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
