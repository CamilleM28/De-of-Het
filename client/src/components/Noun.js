import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../styles/noun.module.css";

function Noun(props) {
  const [Disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("+ Favourite");
  const [showScore, setShowScore] = useState(false);
  const [DeButtonColor, setDeButtonColor] = useState(styles.button);
  const [HetButtonColor, setHetButtonColor] = useState(styles.button);

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
          setButtonText("- Favourite");
        }
      }
    }
    getFavs();
  }, [id, nounId]);

  function het() {
    if (props.noun.article === "Het") {
      setDisable(true);
      setScore(score + 1);
      setHetButtonColor(styles.correctAnswer);
    } else {
      setDisable(true);
      setHetButtonColor(styles.wrongAnswer);
    }
  }

  function de() {
    if (props.noun.article === "De") {
      setDisable(true);
      setScore(score + 1);
      setDeButtonColor(styles.correctAnswer);
    } else {
      setDisable(true);
      setDeButtonColor(styles.wrongAnswer);
    }
  }

  function Favourites() {
    if (buttonText === "+ Favourite") {
      setButtonText("- Favourite");
      axios.patch(`/api/profile/addfav/${id}`, { favouriteId: nounId });
    }
    if (buttonText === "- Favourite") {
      setButtonText("+ Favourite");
      axios.patch(`/api/profile/deletefav/${id}`, {
        deletedId: nounId,
      });
    }
  }

  function next() {
    if (props.currentWord < 25) {
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
        <div className={styles.scoreContainer}>
          <div className={styles.scores}>
            <h2 className={styles.title}>Score:</h2>{" "}
            <h4 className={styles.numbers}>{score}/26</h4>
            <Link to="/home">
              <button onClick={submitScore} className={styles.save}>
                Save Score
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.question}>
          <li key={props.noun._id} className={styles.listItem}>
            <div className={styles.cardTop}>
              <button onClick={Favourites} className={styles.favourite}>
                {buttonText}
              </button>
              <h5 className={styles.count}>
                Question {props.currentWord + 1}/{props.nouns.length}
              </h5>
            </div>
            <h3 className={styles.noun}>{props.noun.noun} </h3>
            <br />
            <img
              src={require(`.${props.noun.image}`)}
              alt=""
              width="300"
              height="300"
            />
            <br />
            <button disabled={Disable} onClick={de} className={DeButtonColor}>
              De
            </button>
            <button disabled={Disable} onClick={het} className={HetButtonColor}>
              Het
            </button>
            <br />
            <button onClick={next} className={styles.next}>
              Next
            </button>
          </li>
        </div>
      )}
    </div>
  );
}

export default Noun;
