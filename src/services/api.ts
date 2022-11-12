import axios, { AxiosError, AxiosInstance} from 'axios';

export const BACKEND_URL = 'https://api.anilibria.tv/v2/';
const REQUEST_TIMEOUT = 5000;


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      throw error;
    }
  );

  return api;
};
