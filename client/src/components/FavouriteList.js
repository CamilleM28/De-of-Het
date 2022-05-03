export default function FavouriteList(props) {
  const favs = props.nouns
    .filter((noun) => noun._id === props.favourite)
    .map((noun) => noun);
  const favourites = favs.map((noun) => {
    return (
      <div key={noun._id}>
        <p>{noun.article}</p>
        <p>{noun.noun}</p>
        <img src={require(`.${noun.image}`)} alt="" width="250" height="250" />
      </div>
    );
  });

  return (
    <div>
      <>
        <h2>{favourites}</h2>
      </>
    </div>
  );
}
