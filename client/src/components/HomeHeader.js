import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

export default function HomeHeader(props) {
  function home() {
    props.setCategory();
  }

  return (
    <div className={styles.header}>
      {/* <Link to="/home" className={styles.homeLink}>
        <button onClick={home} className={styles.homeButton}>
          Home
        </button>
      </Link> */}

      {/* <Link to="/about" >
        About
      </Link> */}
      <img
        className={styles.doh}
        src="./DOH!-Logo.png"
        alt="logo"
        height={120}
        width={120}
      />

      <Link to="/favourites" className={styles.buttonLink}>
        <button onClick={props.updateFavs} className={styles.button}>
          Favourites
        </button>
      </Link>
    </div>
  );
}
