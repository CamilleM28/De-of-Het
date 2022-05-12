import FavouriteList from "./FavouriteList";
import styles from "../styles/favourite.module.css";

export default function Favourites(props) {
  return props.favourites.length > 0 ? (
    props.favourites.map((favourite) => (
      <FavouriteList
        nouns={props.nouns}
        favourite={favourite}
        id={props.id}
        updateFavs={props.updateFavs}
      />
    ))
  ) : (
    <p className={styles.none}>No favourites </p>
  );
}
