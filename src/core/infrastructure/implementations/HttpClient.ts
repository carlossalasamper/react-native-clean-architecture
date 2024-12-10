import axios, { AxiosRequestConfig } from "axios";
import { inject, injectable } from "inversiland";
import IHttpClient from "../../domain/specifications/IHttpClient";
import Env, { EnvToken } from "src/core/domain/entities/Env";

@injectable()
class HttpClient implements IHttpClient {
  private axios: typeof axios;

  constructor(@inject(EnvToken) private readonly env: Env) {
    this.axios = axios;

    axios.interceptors.request.use((requestConfig) => {
      requestConfig.baseURL = env.apiUrl;

      // TODO: add authentication

      return requestConfig;
    });

    this.axios.interceptors.response.use(undefined, (err) => {
      if (err.response) {
        if (err.response.status === 401 || err.response.status === 403) {
          // TODO: logout
        }
      }

      return Promise.reject(err);
    });
  }

  public get<ResponseType>(url: string, config?: AxiosRequestConfig) {
    return this.axios
      .get<ResponseType>(url, config)
      .then((response) => response.data);
  }

  public post<DataType, ResponseType>(
    url: string,
    data?: DataType,
    config?: AxiosRequestConfig
  ) {
    return this.axios
      .post<ResponseType>(url, data, config)
      .then((response) => response.data);
  }

  public patch<DataType, ResponseType>(
    url: string,
    data?: DataType,
    config?: AxiosRequestConfig
  ) {
    return this.axios
      .patch<ResponseType>(url, data, config)
      .then((response) => response.data);
  }

  public delete<ResponseType>(url: string, config?: AxiosRequestConfig) {
    return this.axios
      .delete<ResponseType>(url, config)
      .then((response) => response.data);
  }
}

export default HttpClient;
