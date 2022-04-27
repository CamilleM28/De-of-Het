import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const getProfile = async () => {
  const response = await axios.get(`/api/profile/:id`);

  return response.data || [];
};

const createProfile = async () => {
  const response = await axios.post(`/api/profile`);

  return response.data || [];
};

const addFavourtite = async () => {
  const response = await axios.patch(`/api/profile/addfav/:id`);

  return response.data || [];
};

const deleteFavourite = async () => {
  const response = await axios.patch(`/api/profile/deletefav/:id`);

  return response.data || [];
};

const updateScores = async () => {
  const response = await axios.patch(`/api/profile/scores/:id`);

  return response.data || [];
};

const updateFailed = async () => {
  const response = await axios.patch(`/api/profile/failed/:id`);

  return response.data || [];
};

export {
  getProfile,
  createProfile,
  addFavourtite,
  deleteFavourite,
  updateScores,
  updateFailed,
};
