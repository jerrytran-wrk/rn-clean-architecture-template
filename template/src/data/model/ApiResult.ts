import {AxiosResponse} from 'axios';

export interface ApiResult<DataT = any> {
  data: DataT;
  message?: string;
}

export type ApiProviderResult<T> = AxiosResponse<ApiResult<T>>;
