const Profile = (props) => {
  props.getProfile();

  const foodNouns = props.nouns.filter(
    (noun) => noun.category === "Food & Drink"
  );
  const travelNouns = props.nouns.filter(
    (noun) => noun.category === "Travel & Transport"
  );

  const animalNouns = props.nouns.filter(
    (noun) => noun.category === "Animals & Insects"
  );

  const peopleNouns = props.nouns.filter(
    (noun) => noun.category === "People & Family"
  );

  return (
    <div>
      <p>Hello {props.profile.username} !</p>
      <p>
        Food and Drink{" "}
        {props.profile.scores ? props.profile.scores.food : "No score "} /{" "}
        {foodNouns.length}
      </p>
      <p>
        Travel and Transport{" "}
        {props.profile.scores ? props.profile.scores.travel : "No score "} /{" "}
        {travelNouns.length}
      </p>
      <p>
        Animals and Insects{" "}
        {props.profile.scores ? props.profile.scores.animals : "No score "} /{" "}
        {animalNouns.length}
      </p>
      <p>
        People and Family{" "}
        {props.profile.scores ? props.profile.scores.people : "No score "} /{" "}
        {peopleNouns.length}
      </p>
      <p>{props.profile.failed}</p>
    </div>
  );
};

export default Profile;
