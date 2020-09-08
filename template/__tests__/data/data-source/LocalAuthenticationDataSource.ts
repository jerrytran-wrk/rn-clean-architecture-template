import * as Keychain from 'react-native-keychain';
import {KeyChainAuthenticationDataSource} from '@data';
import {LocalException} from '@core';

describe('ApiAuthenticationDataSource', () => {
  let dataSource: KeyChainAuthenticationDataSource;
  beforeEach(() => {
    dataSource = new KeyChainAuthenticationDataSource();
  });
  describe('save token', () => {
    it('save token success', (done) => {
      dataSource.saveToken('test', 'test').subscribe({
        next: (val) => expect(val).toBeTruthy(),
        complete: done,
      });
    });
    it('save token failed', (done) => {
      const spy = jest
        .spyOn(Keychain, 'setGenericPassword')
        .mockImplementation(jest.fn().mockRejectedValue(1));

      dataSource.saveToken('test', 'test').subscribe({
        error: (error: LocalException) => {
          expect(error).toBeInstanceOf(LocalException);
          done();
        },
      });
      spy.mockRestore();
    });
  });

  describe('get token', () => {
    it('successfully', (done) => {
      const spy = jest
        .spyOn(Keychain, 'getGenericPassword')
        .mockImplementation(jest.fn().mockResolvedValue({password: 'test'}));

      dataSource.getToken().subscribe({
        next: (val) => expect(val).toBe('test'),
        complete: done,
      });
      spy.mockRestore();
    });
    it('empty', (done) => {
      const spy = jest
        .spyOn(Keychain, 'getGenericPassword')
        .mockImplementation(jest.fn().mockResolvedValue(null));

      dataSource.getToken().subscribe({
        error: (error: LocalException) => {
          expect(error).toBeInstanceOf(LocalException);
          done();
        },
      });
      spy.mockRestore();
    });
    it('failed', (done) => {
      const spy = jest
        .spyOn(Keychain, 'getGenericPassword')
        .mockImplementation(jest.fn().mockRejectedValue(1));

      dataSource.getToken().subscribe({
        error: (error: LocalException) => {
          expect(error).toBeInstanceOf(LocalException);
          done();
        },
      });
      spy.mockRestore();
    });
  });
});
