import axios from "axios";

const api = axios.create({
  baseURL: "https://poc.metasix.solutions/parse/classes"
});

export default api;
