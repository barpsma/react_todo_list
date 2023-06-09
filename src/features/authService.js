import axios from "axios";

// register user
const register = async (userData) => {
  const response = await axios.post(
    "http://103.193.177.199:8000/api/auth/register",
    userData
  );
  if (response.data) {
    localStorage.setItem("dataUser", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};
export default authService;
