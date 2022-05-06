import { Link } from "react-router-dom";

export default function Header(props) {
  function home() {
    props.setCategory();
  }

  return (
    <div>
      <Link to="/home" onClick={home}>
        Home
      </Link>

      {/* <Link to="/about" >
        About
      </Link> */}

      <Link to="/favourites" onClick={props.updateFavs}>
        Favourites
      </Link>
    </div>
  );
}
