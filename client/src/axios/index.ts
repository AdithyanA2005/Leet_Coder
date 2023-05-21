import axios from "axios";

// Create a new Axios instance
 const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosInstance;
