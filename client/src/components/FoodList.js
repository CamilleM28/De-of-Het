import { useState } from "react";
import Noun from "./Noun";

const FoodList = (props) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState("Food & Drink");

  const randomNumber = Math.floor(Math.random() * props.nouns.length);
  const filteredArray = props.nouns.map((noun) => (
    <Noun
      key={noun._id}
      noun={noun}
      id={props.id}
      setProfile={props.setProfile}
      setCurrentWord={setCurrentWord}
      currentWord={randomNumber}
      score={score}
      setScore={setScore}
      category={category}
      setQuestionTracker={props.setQuestionTracker}
      questionTracker={props.questionTracker}
    />
  ));

  // const randomArray = filteredArray.sort(() => Math.random() - 0.5);
  // console.log(randomArray.props);
  console.log(randomNumber);
  return props.nouns && props.nouns.length > 0 ? (
    filteredArray[randomNumber - 1]
  ) : (
    <p>No food found</p>
  );
};

//   return props.nouns && props.nouns.length > 0 ? (
//     props.nouns
//       .filter((noun) => noun.category === "Food & Drink")
//       .map((noun) => (
//         <Noun
//           key={noun._id}
//           noun={noun}
//           id={props.id}
//           setProfile={props.setProfile}
//         />
//       ))
//   ) : (
//     <p>No food found</p>
//   );
// };

export default FoodList;
