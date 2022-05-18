import styles from "../styles/profile.module.css";

const Profile = (props) => {
  props.getProfile();

  return (
    <div className={styles.container}>
      <p className={styles.username}>Hello {props.profile.username} !</p>
    </div>
  );
};

export default Profile;
