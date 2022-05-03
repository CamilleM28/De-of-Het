import Noun from "./Noun";

const AnimalList = (props) => {
  return props.nouns && props.nouns.length > 0 ? (
    props.nouns
      .filter((noun) => noun.category === "Animals & Insects")
      .map((noun) => (
        <Noun
          key={noun._id}
          noun={noun}
          id={props.id}
          setProfile={props.setProfile}
        />
      ))
  ) : (
    <p>No animals found</p>
  );
};

export default AnimalList;
