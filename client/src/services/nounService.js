import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const getNouns = async () => {
  const response = await axios.get(`/api/nouns`);

  return response.data || [];
};

export { getNouns };
