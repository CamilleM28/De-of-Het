const Profile = (props) => {
  props.getProfile();

  return (
    <div>
      <p>Hello {props.profile.username} !</p>
      <p>{props.profile.favourites}</p>
      <p>
        Food and Drink{" "}
        {props.profile.scores ? props.profile.scores.food : "No score "} / 26
      </p>
      <p>
        Travel and Transport{" "}
        {props.profile.scores ? props.profile.scores.travel : "No score "} / 26
      </p>
      <p>
        Animals and Insects{" "}
        {props.profile.scores ? props.profile.scores.animals : "No score "} / 26
      </p>
      <p>
        People and Family{" "}
        {props.profile.scores ? props.profile.scores.people : "No score "} / 26
      </p>
      <p>{props.profile.failed}</p>
    </div>
  );
};

export default Profile;
