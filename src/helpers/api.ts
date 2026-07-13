import axios from "axios";
import type { Store } from "@reduxjs/toolkit";
let store: Store | undefined;

// export const HOST = "http:/192.168.1.38:3000";
export const HOST = "https://be-cinemasumoo.up.railway.app";


export const injectStore = (_store: Store) => {
  store = _store;
};

export const instance = axios.create({
  baseURL: HOST,
});

export const authInstance = axios.create({
  baseURL: HOST,
});

authInstance.interceptors.request.use(
  (config) => {
    const token = store?.getState()?.auth?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

authInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API ERROR:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);