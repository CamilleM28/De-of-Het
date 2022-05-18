import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./styles/app.module.css";

import { getNouns } from "./services/nounService";
import axios from "axios";

import Login from "./components/Login";
import Profile from "./components/Profile";
import HomeHeader from "./components/HomeHeader";
import FavHeader from "./components/FavHeader";
import Favourites from "./components/Favourites";
import Category from "./components/Category";
import Footer from "./components/Footer";
import GameHeader from "./components/GameHeader";

function App() {
  const [nouns, setNouns] = useState(null);
  const [id, setId] = useState("");
  const [profile, setProfile] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState();

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
    <div className={styles.background}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Login profileDetails={profileDetails} />
              </>
            }
          />
          <Route
            path="home"
            element={
              <>
                <HomeHeader updateFavs={updateFavs} setCategory={setCategory} />
                <Profile
                  profile={profile}
                  getProfile={getProfile}
                  nouns={nouns}
                />
                <Category
                  profile={profile}
                  setCategory={setCategory}
                  nouns={nouns}
                  id={id}
                  setProfile={setProfile}
                  getProfile={getProfile}
                />
                <Footer setProfile={setProfile} />
              </>
            }
          />
          <Route
            path="/category"
            element={
              <>
                <GameHeader updateFavs={updateFavs} />

                <>{category}</>
              </>
            }
          />
          <Route
            path="/favourites"
            element={
              <>
                <FavHeader setCategory={setCategory} />
                {loading ? (
                  <h2 className={styles.loading}>
                    Loading current favourites...
                  </h2>
                ) : null}
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
