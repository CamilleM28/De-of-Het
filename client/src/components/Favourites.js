import FavouriteList from "./FavouriteList";
import { useEffect } from "react";

export default function Favourites(props) {
  return props.profile ? (
    props.profile.favourites.map((favourite) => (
      <FavouriteList nouns={props.nouns} favourite={favourite} />
    ))
  ) : (
    <p>No favourites </p>
  );
}
