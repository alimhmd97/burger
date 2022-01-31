import axios from "axios";
const instance = axios.create({
  baseURL: "https://react-my-burger-c2f4c-default-rtdb.firebaseio.com/",
});
export default instance;
