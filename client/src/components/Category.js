import { Link } from "react-router-dom";
import styles from "../styles/category.module.css";

import FoodList from "./FoodList";
import TravelList from "./TravelList";
import AnimalList from "./AnimalList";
import PeopleList from "./PeopleList";

export default function Category(props) {
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

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const foodShuffle = shuffle(foodNouns);
  const travelShuffle = shuffle(travelNouns);
  const animalShuffle = shuffle(animalNouns);
  const peopleShuffle = shuffle(peopleNouns);

  function food() {
    props.setCategory(
      <FoodList
        nouns={foodShuffle}
        id={props.id}
        setProfile={props.setProfile}
        getProfile={props.getProfile}
        questionTracker={props.questionTracker}
        setQuestionTracker={props.setQuestionTracker}
      />
    );
  }
  function travel() {
    props.setCategory(
      <TravelList
        nouns={travelShuffle}
        id={props.id}
        setProfile={props.setProfile}
        getProfile={props.getProfile}
      />
    );
  }
  function animals() {
    props.setCategory(
      <AnimalList
        nouns={animalShuffle}
        id={props.id}
        setProfile={props.setProfile}
        getProfile={props.getProfile}
      />
    );
  }
  function people() {
    props.setCategory(
      <PeopleList
        nouns={peopleShuffle}
        id={props.id}
        setProfile={props.setProfile}
        getProfile={props.getProfile}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <p className={styles.heading}>Food & Drink</p>
        <Link to="/category">
          <button className={styles.button} onClick={food}>
            {" "}
            <img
              src={require("./images/(1)egg.png")}
              alt=""
              width="250"
              height="250"
            />
          </button>
        </Link>
        <p className={styles.previousScore}> Previous score: </p>
        <p className={styles.score}>
          {props.profile.scores ? props.profile.scores.food : "No score "} /{" "}
          {foodNouns.length}
        </p>
      </div>
      <div className={styles.category}>
        <p className={styles.heading}> Travel & Transport</p>
        <Link to="/category">
          <button className={styles.button} onClick={travel}>
            <img
              src={require("./images/(27)airplane.png")}
              alt=""
              width="250"
              height="250"
            />
          </button>
        </Link>
        <p className={styles.previousScore}> Previous score: </p>
        <p className={styles.score}>
          {props.profile.scores ? props.profile.scores.travel : "No score "} /{" "}
          {travelNouns.length}
        </p>
      </div>
      <div className={styles.category}>
        <p className={styles.heading}> Animals & Insects</p>
        <Link to="/category">
          <button className={styles.button} onClick={animals}>
            <img
              src={require("./images/(53)animal.png")}
              alt=""
              width="250"
              height="250"
            />
          </button>
        </Link>
        <p className={styles.previousScore}> Previous score: </p>
        <p className={styles.score}>
          {props.profile.scores ? props.profile.scores.animals : "No score "} /{" "}
          {animalNouns.length}
        </p>
      </div>
      <div className={styles.category}>
        <p className={styles.heading}>People & Family</p>
        <Link to="/category">
          <button className={styles.button} onClick={people}>
            <img
              src={require("./images/(79)family.png")}
              alt=""
              width="250"
              height="250"
            />
          </button>
        </Link>
        <p className={styles.previousScore}> Previous score: </p>
        <p className={styles.score}>
          {props.profile.scores ? props.profile.scores.people : "No score "} /{" "}
          {peopleNouns.length}
        </p>
      </div>
    </div>
  );
}
