import axios, { AxiosError } from "axios";
import { setIsLoading } from "modules/_shared/app-store/reducer";
import { store } from "modules/_shared/root-store/store";
import { keycloakClient } from "modules/_shared/services/keycloak";

export const axiosRequest = axios.create({
  baseURL: "http://localhost:3333",
  responseType: "json",
});

axiosRequest.interceptors.request.use(
  (config) => {
    store.dispatch(setIsLoading(true));
    // do something before request
    const token = keycloakClient.getToken();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error: AxiosError) => {
    store.dispatch(setIsLoading(false));
    // do something with request error
    return Promise.reject(error);
  },
);

axiosRequest.interceptors.response.use(
  (response) => {
    store.dispatch(setIsLoading(false));
    // do something with response 2xx statuses
    return response;
  },
  async (error: AxiosError) => {
    store.dispatch(setIsLoading(false));
    // do something with response OVER 2xx statuses
    return Promise.reject(error);
  },
);
