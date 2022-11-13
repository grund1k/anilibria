import axios, { AxiosError, AxiosInstance} from 'axios';
import { BACKEND_URL } from '../const';
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
