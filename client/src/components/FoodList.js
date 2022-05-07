import { useState } from "react";
import Noun from "./Noun";

const FoodList = (props) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [category] = useState("Food & Drink");

  const foodArray = props.nouns.map((noun) => (
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
    foodArray[currentWord]
  ) : (
    <p>No food found</p>
  );
};

export default FoodList;
