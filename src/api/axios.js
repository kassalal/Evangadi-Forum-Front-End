import axios from "axios";
const instance = axios.create({
  baseURL: "https://evangadi-forum-back-end-31h9.onrender.com/api",
});
export default instance;
