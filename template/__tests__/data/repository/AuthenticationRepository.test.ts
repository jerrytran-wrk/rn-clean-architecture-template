import {of, throwError} from 'rxjs';

import {CombineAuthenticationRepository} from '@data';
import {
  MockRemoteAuthenticationDataSource,
  MockLocalAuthenticationDataSource,
} from '@mocks';
import {RemoteException, LocalException} from '@core';

describe('AuthenticationRepository', () => {
  let repository: CombineAuthenticationRepository;
  let localDataSource: MockLocalAuthenticationDataSource;
  let remoteDataSource: MockRemoteAuthenticationDataSource;
  beforeEach(() => {
    localDataSource = new MockLocalAuthenticationDataSource();
    remoteDataSource = new MockRemoteAuthenticationDataSource();
    repository = new CombineAuthenticationRepository(
      localDataSource,
      remoteDataSource,
    );
  });

  describe('sign in', () => {
    it('successfully', (done) => {
      remoteDataSource.mockSignInResult = of({data: {token: 'test', user: {}}});
      repository.signIn({}).subscribe({
        next: (result) =>
          expect(result).toStrictEqual({fromLocal: false, token: 'test'}),
        complete: done,
      });
    });

    it('failed', (done) => {
      remoteDataSource.mockSignInResult = throwError(new RemoteException({}));
      repository.signIn({}).subscribe({
        error: (error) => {
          expect(error).toBeInstanceOf(RemoteException);
          done();
        },
      });
    });
  });

  describe('get token', () => {
    it('successfully', (done) => {
      localDataSource.mockGetTokenResult = of('token');
      repository.getToken().subscribe({
        next: (result) => expect(result).toBe('token'),
        complete: done,
      });
    });

    it('failed', (done) => {
      localDataSource.mockGetTokenResult = throwError(new LocalException({}));
      repository.getToken().subscribe({
        error: (error) => {
          expect(error).toBeInstanceOf(LocalException);
          done();
        },
      });
    });
  });

  describe('save token', () => {
    it('successfully', (done) => {
      localDataSource.mockSaveTokenResult = of(true);
      repository.saveToken('test', 'key').subscribe({
        next: (result) => expect(result).toBeTruthy(),
        complete: done,
      });
    });

    it('failed', (done) => {
      localDataSource.mockSaveTokenResult = throwError(new LocalException({}));
      repository.saveToken('test', 'test').subscribe({
        error: (error) => {
          expect(error).toBeInstanceOf(LocalException);
          done();
        },
      });
    });
  });
});
