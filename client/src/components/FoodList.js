import Noun from "./Noun";

const FoodList = (props) => {
  return props.nouns && props.nouns.length > 0 ? (
    props.nouns
      .filter((noun) => noun.category === "Food & Drink")
      .map((noun) => (
        <Noun
          key={noun._id}
          noun={noun}
          id={props.id}
          setProfile={props.setProfile}
        />
      ))
  ) : (
    <p>No food found</p>
  );
};

export default FoodList;
