import Noun from "./Noun";

const NounList = (props) => {
  return props.nouns && props.nouns.length > 0 ? (
    props.nouns.map((noun) => <Noun key={noun._id} noun={noun} />)
  ) : (
    <p>No words found</p>
  );
};

export default NounList;
