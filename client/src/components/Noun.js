function Noun(props) {
  console.log(props.noun.image);
  return (
    <li key={props.noun._id}>
      <h3>{props.noun.noun} </h3>
      <img
        src={require(`.${props.noun.image}`)}
        alt=""
        width="250"
        height="250"
      />
      <button>De</button>
      <button>Het</button>
    </li>
  );
}

export default Noun;
