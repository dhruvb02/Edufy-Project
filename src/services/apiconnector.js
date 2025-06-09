// src/services/apiconnector.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,  // e.g. http://localhost:4000/api/v1
  withCredentials: true,                    // if you’re using cookie-based auth
});

console.log("base url is : ",axiosInstance.defaults.baseURL);
// injects your bearer token into every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * A thin wrapper around axiosInstance that
 * only adds data/params/headers when you actually pass them,
 * so you never wipe out the Authorization header.
 */
export const apiConnector = (method, url, data, extraHeaders, params) => {
  const config = {
    method,
    url,
    withCredentials: true,
  };
  if (data)         config.data    = data;
  if (params)       config.params  = params;
  if (extraHeaders) config.headers = extraHeaders;

  return axiosInstance(config);
};
