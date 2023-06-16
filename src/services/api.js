import axios from "axios";

const api = axios.create({
  baseURL: "http://XXX.XXX.XXX.XX:8000",
});

export default api;
