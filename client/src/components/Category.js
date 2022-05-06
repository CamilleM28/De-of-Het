import { Link } from "react-router-dom";
import FoodList from "./FoodList";
import TravelList from "./TravelList";
import AnimalList from "./AnimalList";
import PeopleList from "./PeopleList";

export default function Category(props) {
  const foodList = props.nouns.filter(
    (noun) => noun.category === "Food & Drink"
  );
  const travelList = props.nouns.filter(
    (noun) => noun.category === "Travel & Transport"
  );

  const animalList = props.nouns.filter(
    (noun) => noun.category === "Animals & Insects"
  );

  const peopleList = props.nouns.filter(
    (noun) => noun.category === "People & Family"
  );

  function food() {
    props.setCategory(
      <FoodList
        nouns={foodList}
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
        nouns={travelList}
        id={props.id}
        setProfile={props.setProfile}
        getProfile={props.getProfile}
      />
    );
  }
  function animals() {
    props.setCategory(
      <AnimalList
        nouns={animalList}
        id={props.id}
        setProfile={props.setProfile}
        getProfile={props.getProfile}
      />
    );
  }
  function people() {
    props.setCategory(
      <PeopleList
        nouns={peopleList}
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
