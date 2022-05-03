import Noun from "./Noun";

const TravelList = (props) => {
  return props.nouns && props.nouns.length > 0 ? (
    props.nouns
      .filter((noun) => noun.category === "Travel & Transport")
      .map((noun) => (
        <Noun
          key={noun._id}
          noun={noun}
          id={props.id}
          setProfile={props.setProfile}
        />
      ))
  ) : (
    <p>No travel found</p>
  );
};

export default TravelList;
