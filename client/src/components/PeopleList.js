import Noun from "./Noun";

const PeopleList = (props) => {
  return props.nouns && props.nouns.length > 0 ? (
    props.nouns
      .filter((noun) => noun.category === "People & Family")
      .map((noun) => (
        <Noun
          key={noun._id}
          noun={noun}
          id={props.id}
          setProfile={props.setProfile}
        />
      ))
  ) : (
    <p>No people found</p>
  );
};

export default PeopleList;
