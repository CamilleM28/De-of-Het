import { useEffect, useState } from "react";
import axios from "axios";

function Noun(props) {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState("");
  const [deDisable, setDeDisable] = useState(false);
  const [hetDisable, setHetDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Favourite");

  const id = props.id;
  const nounId = props.noun._id;

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
      setDeDisable(true);
    } else {
      setWrongAnswer("Wrong");
      setDeDisable(true);
    }
  }

  function de() {
    if (props.noun.article === "De") {
      setCorrectAnswer("Correct");
      setHetDisable(true);
    } else {
      setWrongAnswer("Wrong");
      setHetDisable(true);
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

  return (
    <li key={props.noun._id}>
      <h3>{props.noun.noun} </h3>
      <img
        src={require(`.${props.noun.image}`)}
        alt=""
        width="250"
        height="250"
      />
      <button disabled={deDisable} onClick={de}>
        De
      </button>
      <button disabled={hetDisable} onClick={het}>
        Het
      </button>
      <h3>{correctAnswer}</h3>
      <h3>{wrongAnswer}</h3>
      <button onClick={Favourites}>{buttonText}</button>
    </li>
  );
}

export default Noun;
