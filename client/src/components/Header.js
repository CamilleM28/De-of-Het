import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/home">Home</Link>

      {/* <Link to="/about" >
        About
      </Link> */}

      <Link to="/favourites">Favourites</Link>
    </div>
  );
}
