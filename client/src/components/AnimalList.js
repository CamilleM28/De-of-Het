import { useState } from "react";
import Noun from "./Noun";

const AnimalList = (props) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [category] = useState("Animals & Insects");

  const animalArray = props.nouns.map((noun) => (
    <Noun
      key={noun._id}
      noun={noun}
      id={props.id}
      setProfile={props.setProfile}
      setCurrentWord={setCurrentWord}
      currentWord={currentWord}
      score={score}
      setScore={setScore}
      category={category}
      nouns={props.nouns}
    />
  ));
  return props.nouns && props.nouns.length > 0 ? (
    animalArray[currentWord]
  ) : (
    <p>No animals found</p>
  );
};

export default AnimalList;
