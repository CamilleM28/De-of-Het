import { useState } from "react";
import { Link } from "react-router-dom";
import FoodList from "./FoodList";
import TravelList from "./TravelList";
import AnimalList from "./AnimalList";
import PeopleList from "./PeopleList";

export default function Category(props) {
  const foodList = props.nouns.filter(
    (noun) => noun.category === "Food & Drink"
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
        nouns={props.nouns}
        id={props.id}
        setProfile={props.setProfile}
        getProfile={props.getProfile}
      />
    );
  }
  function animals() {
    props.setCategory(
      <AnimalList
        nouns={props.nouns}
        id={props.id}
        setProfile={props.setProfile}
        getProfile={props.getProfile}
      />
    );
  }
  function people() {
    props.setCategory(
      <PeopleList
        nouns={props.nouns}
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
