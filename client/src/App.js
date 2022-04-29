import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getNouns } from "./services/nounService";

import NounList from "./components/NounList";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [nouns, setNouns] = useState(null);

  useEffect(() => {
    async function getWords() {
      if (!nouns) {
        const response = await getNouns();
        setNouns(response);
      }
    }

    getWords();
  }, [nouns]);

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
                <Login />
              </>
            }
          />
          <Route
            path="home"
            element={
              <>
                <Home />
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
