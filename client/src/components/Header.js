import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <Link to="/home">Home</Link>

      {/* <Link to="/about" >
        About
      </Link> */}

      <Link to="/favourites" onClick={props.updateFavs}>
        Favourites
      </Link>
    </div>
  );
}
