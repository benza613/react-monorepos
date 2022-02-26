import axios from "axios";

const Q = axios.create({
  baseURL: "",
  url: "",
  params: {},
  headers: {},
  withCredentials: false,
});

export default Q;
