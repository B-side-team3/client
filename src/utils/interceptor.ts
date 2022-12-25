import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";
import axios from "axios";
import { METHOD } from "src/constant/enums";

const handleRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.params = new URLSearchParams(config.params);

  return {
    ...config,
  };
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleResponse = <T>(response: AxiosResponse<T>) => {
  return response.data;
};

const createApiMethod =
  (_axiosInstance: AxiosInstance, method: Method) =>
  (
    url: AxiosRequestConfig["url"],
    config?: Omit<AxiosRequestConfig, "url">,
  ): Promise<any> => {
    return _axiosInstance({
      ...handleRequest({ url, ...config }),
      method,
    }).then(res => handleResponse(res));
  };

export default {
  get: createApiMethod(axiosInstance, METHOD.GET),
  post: createApiMethod(axiosInstance, METHOD.POST),
  patch: createApiMethod(axiosInstance, METHOD.PATCH),
  put: createApiMethod(axiosInstance, METHOD.PUT),
  delete: createApiMethod(axiosInstance, METHOD.DELETE),
};
