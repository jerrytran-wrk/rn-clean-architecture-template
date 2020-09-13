import {injectable, inject} from 'tsyringe';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {RxRemoteProvider} from '@core';

import {SignInResponseData, SignInRequestData, ApiResult} from '../model';

export interface RemoteAuthenticationDataSource {
  /**
   * @method signIn
   *
   * @description Sign in user with phone
   */
  signIn(body: SignInRequestData): Observable<ApiResult<SignInResponseData>>;
}

@injectable()
export class ApiAuthenticationDataSource
  implements RemoteAuthenticationDataSource {
  constructor(
    @inject('ApiProvider')
    private readonly provider: RxRemoteProvider,
  ) {}
  signIn(body: SignInRequestData): Observable<ApiResult<SignInResponseData>> {
    return this.provider
      .post<ApiResult<SignInResponseData>>('login_url', body)
      .pipe(map((response) => response.data));
  }
}
