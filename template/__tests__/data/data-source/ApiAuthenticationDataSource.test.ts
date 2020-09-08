import {ApiAuthenticationDataSource} from '@data';
import {MockBearerAuthorizationRxAxiosProvider} from '@mocks';
import {of, throwError} from 'rxjs';
import {RxAxiosProviderException} from '@core';

describe('ApiAuthenticationDataSource', () => {
  let dataSource: ApiAuthenticationDataSource;
  let provider: MockBearerAuthorizationRxAxiosProvider;
  beforeEach(() => {
    provider = new MockBearerAuthorizationRxAxiosProvider({});
    dataSource = new ApiAuthenticationDataSource(provider);
  });
  it('sign in successfully', async (done) => {
    provider.overrideFunctions = ['request'];
    provider.mockResult = of({
      data: {data: {token: 'test'}},
      config: {},
      status: 200,
      headers: {},
      statusText: '',
    });
    dataSource.signIn({}).subscribe({
      next: (response) => expect(response.data.token).toBe('test'),
      complete: done,
    });
  });
  it('sign in failed', async (done) => {
    provider.overrideFunctions = ['request'];
    provider.mockResult = throwError(
      new RxAxiosProviderException(JSON.parse('{}')),
    );
    dataSource.signIn({}).subscribe({
      error: (error: RxAxiosProviderException) => {
        expect(error).toBeInstanceOf(RxAxiosProviderException);
        expect(error.rootCause).toStrictEqual({});
        done();
      },
    });
  });
});
