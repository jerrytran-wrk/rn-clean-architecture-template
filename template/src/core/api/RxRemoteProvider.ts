import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import {Observable, Observer} from 'rxjs';
import {RemoteException} from '../error';

export interface RxRemoteProvider {
  /**
   * @summary perform @POST request with config
   * @param url
   * @param data
   *
   * @returns Either Axios response with generic data: T or @RemoteException if failed
   */
  post<T>(url: string, data: any): Observable<AxiosResponse<T>>;

  /**
   * @summary perform @GET request with config
   * @param url
   *
   * @returns Either Axios response with generic data: T or @RemoteException if failed
   */
  get<T>(url: string): Observable<AxiosResponse<T>>;

  /**
   * @summary perform @PUT request with config
   * @param url
   * @param data
   *
   * @returns Either Axios response with generic data: T or @RemoteException if failed
   */
  put<T>(url: string, data: any): Observable<AxiosResponse<T>>;

  /**
   * @summary perform @DELETE request with config
   * @param url
   *
   * @returns Either Axios response with generic data: T or @RemoteException if failed
   */
  delete<T>(url: string): Observable<AxiosResponse<T>>;
}

export class RxAxiosProviderException extends RemoteException<AxiosError> {}

export class BearerAuthorizationRxAxiosProvider<Result = any>
  implements RxRemoteProvider {
  private readonly axiosInstance: AxiosInstance;

  private token?: string;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
  }

  request<T>(requestConfig: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return Observable.create(async (observer: Observer<AxiosResponse<T>>) => {
      try {
        const result = await this.axiosInstance.request(requestConfig);
        observer.next(result);
        observer.complete();
      } catch (error) {
        observer.error(new RxAxiosProviderException(error));
      }
    });
  }

  post<T>(url: string, data: any): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'POST',
      data,
      url,
    });
  }
  get<T>(url: string): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'GET',
      url,
    });
  }
  put<T>(url: string, data: any): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'PUT',
      data,
      url,
    });
  }
  delete<T>(url: string): Observable<AxiosResponse<T>> {
    return this.request({
      method: 'DELETE',
      url,
    });
  }
}
