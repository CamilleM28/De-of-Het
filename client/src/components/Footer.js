import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link to="/" className={styles.buttonLink}>
        <button className={styles.button}>Log out</button>
      </Link>
    </div>
  );
}
