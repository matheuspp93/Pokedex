import axios from "axios";
import { baseURL } from "constants/endpoints";

const api = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
