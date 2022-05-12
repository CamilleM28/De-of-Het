import { useState, useEffect } from "react";
import { getProfiles } from "../services/profileService";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

const Login = (props) => {
  const [SignUpUsername, setSignUpUsername] = useState();
  const [SignUpPassword, setSignUpPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [LoginUsername, setLoginUsername] = useState();
  const [LoginPassword, setLoginPassword] = useState();
  const [profiles, setProfiles] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function checkProfiles() {
      if (!profiles) {
        const response = await getProfiles();

        setProfiles(response);
      }
    }
    checkProfiles();
  }, [profiles]);

  const handleSignUp = (event) => {
    event.preventDefault();
    const match = profiles.find(
      (profile) => SignUpUsername === profile.username
    );
    if (match === undefined && ConfirmPassword === SignUpPassword) {
      async function createProfile() {
        await axios.post(`/api/profile`, {
          username: SignUpUsername,
          password: SignUpPassword,
        });
      }
      createProfile();
      async function checkProfiles() {
        const response = await getProfiles();

        setProfiles(response);
      }
      checkProfiles();
      setProfiles(checkProfiles);

      alert(
        `Profile created. Please Sign in. Your username is ${SignUpUsername}`
      );
    }
    if (match !== undefined && SignUpPassword === ConfirmPassword) {
      alert("Username already taken");
    }
    if (match !== undefined && SignUpPassword !== ConfirmPassword) {
      alert("Username already taken & Passwords do not match");
    }
    if (match === undefined && SignUpPassword !== ConfirmPassword) {
      alert("Passwords do not match");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const match = profiles.find(
      (profile) =>
        LoginUsername === profile.username && LoginPassword === profile.password
    );

    if (match !== undefined) {
      const id = match._id;
      props.profileDetails(id);

      navigate("home");
    }
    if (match === undefined) {
      alert("Login details not found");
    }
  };

  return (
    <div>
      <div className={styles.navBar}>
        <button className={styles.aboutButton}>About</button>
        <button className={styles.contactButton}>Contact</button>
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSignUp} className={styles.signUp}>
          <h2 className={styles.heading}>Sign Up</h2>
          <input
            className={styles.inputBox}
            type="text"
            required
            placeholder="Username"
            onChange={(e) => setSignUpUsername(e.target.value)}
          />
          <br />
          <input className={styles.inputBox} type="text" placeholder="email" />
          <br />
          <input
            className={styles.inputBox}
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <br />
          <input
            className={styles.inputBox}
            type="password"
            required
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />

          <input className={styles.formButton} type="submit" value="Sign up" />
        </form>
        <img
          className={styles.title}
          src="/DOH!-Logo.png"
          alt="DOH! logo"
          width="400"
          height="400"
        />
        <form onSubmit={handleLogin} className={styles.login}>
          <h2 className={styles.heading}>Login</h2>
          <input
            className={styles.inputBox}
            type="text"
            required
            placeholder="Username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <br />
          <input
            className={styles.inputBox}
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <br />
          <button className={styles.formButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
