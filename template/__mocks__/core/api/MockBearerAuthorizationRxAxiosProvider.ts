import {BearerAuthorizationRxAxiosProvider} from '@core';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Observable} from 'rxjs';

export class MockBearerAuthorizationRxAxiosProvider extends BearerAuthorizationRxAxiosProvider {
  mockResult: Observable<AxiosResponse<any>> = new Observable();
  overrideFunctions: ('request' | '')[] = [];
  logs: string[] = [];
  request(requestConfig: AxiosRequestConfig): Observable<AxiosResponse<any>> {
    this.logs.push('request');
    if (this.overrideFunctions.includes('request')) {
      return this.mockResult;
    }
    return super.request(requestConfig);
  }
}
