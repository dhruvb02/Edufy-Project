// src/utils/tokenUtils.js

/**
 * Check if a JWT token is expired
 */
export const isTokenExpired = (token) => {
  if (!token) return true;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

/**
 * Get valid token from localStorage
 */
export const getValidToken = () => {
  const token = localStorage.getItem("token");
  
  if (!token || isTokenExpired(token)) {
    clearAuthData();
    return null;
  }
  
  return token;
};

/**
 * Store token in localStorage
 */
export const setTokenStorage = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
};

/**
 * Store user data in localStorage
 */
export const setUserStorage = (user) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("user");
  }
};

/**
 * Get user data from localStorage
 */
export const getUserStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};

/**
 * Clear all authentication data
 */
export const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
  localStorage.removeItem("total");
  localStorage.removeItem("totalItems");
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  const token = getValidToken();
  const user = getUserStorage();
  return !!(token && user);
};