import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

export default function FavHeader(props) {
  // function home() {
  //   props.setCategory();
  // }

  return (
    <div className={styles.header}>
      <img
        className={styles.doh}
        src="./DOH!-Logo.png"
        alt="logo"
        height={120}
        width={120}
      />

      <Link to="/home" className={styles.buttonLink}>
        <button className={styles.button}>Home</button>
      </Link>

      {/* <Link to="/about" >
        About
      </Link> */}

      {/* <Link to="/favourites">
        <button onClick={props.updateFavs} className={styles.favButton}>
          Favourites
        </button>
      </Link> */}
    </div>
  );
}
