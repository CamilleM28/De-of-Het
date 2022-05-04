import FavouriteList from "./FavouriteList";

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
    <p>No favourites </p>
  );
}
