import {Observable} from 'rxjs';

import {
  RemoteAuthenticationDataSource,
  SignInResponseData,
  ApiResult,
} from '@data';

export class MockRemoteAuthenticationDataSource
  implements RemoteAuthenticationDataSource {
  mockSignInResult: Observable<
    ApiResult<SignInResponseData>
  > = new Observable();
  signIn(): Observable<ApiResult<SignInResponseData>> {
    return this.mockSignInResult;
  }
}
