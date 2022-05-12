import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

export default function GameHeader(props) {
  return (
    <div className={styles.twoButtonHeader}>
      <img
        className={styles.doh}
        src="./DOH!-Logo.png"
        alt="logo"
        height={120}
        width={120}
      />
      <Link to="/home" className={styles.homeLink}>
        <button className={styles.button}>Home</button>
      </Link>

      {/* <Link to="/about" >
            About
          </Link> */}

      <Link to="/favourites" className={styles.favLink}>
        <button onClick={props.updateFavs} className={styles.button}>
          Favourites
        </button>
      </Link>
    </div>
  );
}
