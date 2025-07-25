import axios from "axios";
import { toast } from "react-hot-toast";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // Clean token and add to headers
      const cleanToken = token.replace(/^"|"$/g, '');
      config.headers.Authorization = `Bearer ${cleanToken}`;
      console.log("Token being sent:", cleanToken.substring(0, 20) + "...");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - REMOVED auto-redirect to prevent loops
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API Error:", error.response?.status, error.response?.data);
    
    // Only handle specific 401 cases, don't auto-redirect
    if (error.response?.status === 401) {
      const errorMessage = error.response?.data?.message;
      console.log("401 Error Message:", errorMessage);
      
      // Only clear auth if it's a token validation error
      if (errorMessage?.includes('token') || errorMessage?.includes('jwt')) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("Token cleared due to validation error");
      }
    }
    
    return Promise.reject(error);
  }
);

export const apiConnector = (method, url, data, extraHeaders, params) => {
  const config = {
    method,
    url,
    withCredentials: true,
  };
  
  if (data) config.data = data;
  if (params) config.params = params;
  if (extraHeaders) {
    config.headers = { ...config.headers, ...extraHeaders };
  }

  return axiosInstance(config);
};