import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
/* ["https://api.github.com/search/users?q", "location", "minRepos"]
 */
