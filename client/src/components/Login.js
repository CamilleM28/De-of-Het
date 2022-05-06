import { useState, useEffect } from "react";
import { getProfiles } from "../services/profileService";
import { useNavigate } from "react-router-dom";

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
      // const response = await axios.get(`/api/profile/` + id);
      // async function getProfile() {
      //   const response = await axios.get(`/api/profile/` + match._id);
      //   console.log(response.data);
      // }
      // getProfile();
      const id = match._id;
      props.profileDetails(id);

      navigate("home");
    }
    if (match === undefined) {
      alert("Login details not found");
    }
  };

  return (
    <>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          required
          placeholder="Username"
          onChange={(e) => setSignUpUsername(e.target.value)}
        />
        <input type="text" placeholder="email" />
        <input
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setSignUpPassword(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <input type="submit" value="Sign up" />
      </form>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          required
          placeholder="Username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
