import { useState } from "react";
import Noun from "./Noun";

const TravelList = (props) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState("Travel & Transport");

  const filteredArray = props.nouns
    .filter((noun) => noun.category === "Travel & Transport")
    .map((noun) => (
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
      />
    ));
  return props.nouns && props.nouns.length > 0 ? (
    filteredArray[currentWord]
  ) : (
    <p>No travel found</p>
  );
};

export default TravelList;
