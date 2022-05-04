import axios from "axios";
import { useState } from "react";

export default function FavouriteList(props) {
  const [buttonText, setButtonText] = useState("Remove from favourites");

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
      <div key={noun._id}>
        <p>{noun.article}</p>
        <p>{noun.noun}</p>
        <img src={require(`.${noun.image}`)} alt="" width="250" height="250" />
        <button onClick={removeFavourite}>{buttonText}</button>
      </div>
    );
  });

  return (
    <div>
      <div>
        <>
          <h2>{favourites}</h2>
        </>
      </div>
    </div>
  );
}
