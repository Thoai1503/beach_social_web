import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://testlaravelapi-main-lz718j.laravel.cloud",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosConfig;
