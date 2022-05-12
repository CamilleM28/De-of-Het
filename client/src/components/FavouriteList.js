import axios from "axios";
import { useState } from "react";
import styles from "../styles/favourite.module.css";

export default function FavouriteList(props) {
  const [buttonText, setButtonText] = useState("Remove favourite");

  const favs = props.nouns
    .filter((noun) => noun._id === props.favourite)
    .map((noun) => noun);

  function removeFavourite() {
    const id = props.id;
    const nounId = props.favourite;
    axios.patch(`/api/profile/deletefav/${id}`, {
      deletedId: nounId,
    });
    setButtonText("Removed");
  }

  const favourites = favs.map((noun) => {
    return (
      <div key={noun._id} className={styles.noun}>
        <p>{noun.article} </p>
        <p>{noun.noun}</p>
        <img src={require(`.${noun.image}`)} alt="" width="200" height="200" />
        <br />
        <button onClick={removeFavourite} className={styles.button}>
          {buttonText}
        </button>
      </div>
    );
  });

  return favourites;
}
