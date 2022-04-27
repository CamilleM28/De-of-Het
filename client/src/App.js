import "./App.css";
import React, { useState, useEffect } from "react";

import { getNouns } from "./services/nounService";

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

  const renderNoun = (noun) => {
    return (
      <li key={noun._id}>
        <h3>{noun.noun} </h3>
        <img src={require(`.${noun.image}`)} alt="" width="250" height="250" />
        <button>De</button>
        <button>Het</button>
      </li>
    );
  };

  return (
    <div>
      <ul>
        {nouns && nouns.length > 0 ? (
          nouns.map((noun) => renderNoun(noun))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
