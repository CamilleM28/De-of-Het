import styles from "../styles/profile.module.css";

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
    <div className={styles.container}>
      <p className={styles.username}>Hello {props.profile.username} !</p>
      {/* <p className={styles.food}>
        Food and Drink <br />
        {props.profile.scores ? props.profile.scores.food : "No score "} /{" "}
        {foodNouns.length}
      </p>
      <p className={styles.score}>
        Travel and Transport <br />
        {props.profile.scores
          ? props.profile.scores.travel
          : "No score "} / {travelNouns.length}
      </p>
      <p className={styles.score}>
        Animals and Insects <br />
        {props.profile.scores
          ? props.profile.scores.animals
          : "No score "} / {animalNouns.length}
      </p>
      <p className={styles.score}>
        People and Family <br />
        {props.profile.scores
          ? props.profile.scores.people
          : "No score "} / {peopleNouns.length}
      </p> */}
    </div>
  );
};

export default Profile;
