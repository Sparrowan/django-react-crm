import axios, { AxiosInstance } from "axios";


const BASE_URL = "http://127.0.0.1:8000/";

let getToken = (): string | null => {
  const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root") || "{}").user)?.currentUser;
  return user ? user.access : null;
};

export const getAuthorizationHeader = (): string => `Bearer ${getToken() || ""}`;

export const publicRequest: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const userRequest: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

userRequest.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = getAuthorizationHeader();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const refreshAccessToken = (): void => {
  // Logic to refresh the access token if needed
  // This might involve making a request to your server
  // to get a new token and updating the localStorage.
};

// Usage:
// Call refreshAccessToken when needed to update the token.
// This will automatically update the Authorization header for userRequest.
