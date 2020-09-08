import {Observable} from 'rxjs';

import {LocalAuthenticationDataSource} from '@data';

export class MockLocalAuthenticationDataSource
  implements LocalAuthenticationDataSource {
  mockSaveTokenResult: Observable<boolean> = new Observable();
  mockGetTokenResult: Observable<string> = new Observable();
  saveToken(): Observable<boolean> {
    return this.mockSaveTokenResult;
  }
  getToken(): Observable<string> {
    return this.mockGetTokenResult;
  }
}
