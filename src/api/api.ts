import axios from "axios";

export const BASE_URL = "http://localhost:7575/";
export const BASE_URL_2 = "http://localhost:7575/";
const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("my_token")}`,
  },
});
const AxiosInstanceFormData = axios.create({
  baseURL: BASE_URL,
  timeout: 100000000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("my_token")}`,
    "Content-Type": "multipart/form-data",
  },
});
export { AxiosInstance };
export { AxiosInstanceFormData };
