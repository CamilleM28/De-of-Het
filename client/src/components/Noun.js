import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Noun(props) {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState("");
  const [Disable, setDisable] = useState(false);
  // const [hetDisable, setHetDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Favourite");
  const [showScore, setShowScore] = useState(false);

  const id = props.id;
  const nounId = props.noun._id;
  const score = props.score;
  const setScore = props.setScore;

  useEffect(() => {
    async function getFavs() {
      if (id !== undefined) {
        const response = await axios.get(`/api/profile/${id}`);
        const currentFav = response.data.favourites.find(
          (favourite) => favourite === nounId
        );
        if (currentFav) {
          setButtonText("Remove from favourites");
        }
      }
    }
    getFavs();
  }, [id, nounId]);

  function het() {
    if (props.noun.article === "Het") {
      setCorrectAnswer("Correct");
      setDisable(true);
      setScore(score + 1);
    } else {
      setWrongAnswer("Wrong");
      setDisable(true);
    }
  }

  function de() {
    if (props.noun.article === "De") {
      setCorrectAnswer("Correct");
      setDisable(true);
      setScore(score + 1);
    } else {
      setWrongAnswer("Wrong");
      setDisable(true);
    }
  }

  function Favourites() {
    if (buttonText === "Favourite") {
      setButtonText("Remove from favourites");
      axios.patch(`/api/profile/addfav/${id}`, { favouriteId: nounId });
    }
    if (buttonText === "Remove from favourites") {
      setButtonText("Favourite");
      axios.patch(`/api/profile/deletefav/${id}`, {
        deletedId: nounId,
      });
    }
  }

  function next() {
    if (props.currentWord < 25) {
      props.setQuestionTracker([...props.questionTracker, props.currentWord]);
      props.setCurrentWord(props.currentWord + 1);
    }
    if (props.currentWord === 25) {
      setShowScore(true);
    }
  }

  async function submitScore() {
    if (props.category === "Food & Drink") {
      const response = await axios.patch(`/api/profile/scores/${id}`, {
        "scores.food": score,
      });
      props.setProfile(response);
    }
    if (props.category === "Travel & Transport") {
      const response = await axios.patch(`/api/profile/scores/${id}`, {
        "scores.travel": score,
      });
      props.setProfile(response);
    }
    if (props.category === "Animals & Insects") {
      const response = await axios.patch(`/api/profile/scores/${id}`, {
        "scores.animals": score,
      });
      props.setProfile(response);
    }
    if (props.category === "People & Family") {
      const response = await axios.patch(`/api/profile/scores/${id}`, {
        "scores.people": score,
      });
      props.setProfile(response);
    }
  }

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Score</h2>
          <h4>{score}/26</h4>
          <Link to="/home">
            <button onClick={submitScore}>Submit</button>
          </Link>
        </div>
      ) : (
        <div>
          <li key={props.noun._id}>
            <h3>{props.noun.noun} </h3>
            <img
              src={require(`.${props.noun.image}`)}
              alt=""
              width="250"
              height="250"
            />
            <button disabled={Disable} onClick={de}>
              De
            </button>
            <button disabled={Disable} onClick={het}>
              Het
            </button>
            <h3>{correctAnswer}</h3>
            <h3>{wrongAnswer}</h3>
            <button onClick={Favourites}>{buttonText}</button>
            <button onClick={next}>Next</button>
          </li>
        </div>
      )}
    </div>
  );
}

export default Noun;
