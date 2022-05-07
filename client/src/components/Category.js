import { Link } from "react-router-dom";
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
    <div>
      <Link to="/category">
        <button onClick={food}>Food & Drink</button>
      </Link>
      <Link to="/category">
        <button onClick={travel}>Travel & Transport</button>
      </Link>
      <Link to="/category">
        <button onClick={animals}>Animals & Insects </button>
      </Link>
      <Link to="/category">
        <button onClick={people}>People & Family</button>
      </Link>
    </div>
  );
}
