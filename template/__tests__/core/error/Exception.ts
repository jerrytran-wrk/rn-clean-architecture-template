import {RemoteException, LocalException} from '@core';

describe('Exception', () => {
  describe('Remote Exception', () => {
    it('get raw error', () => {
      const raw = {dummy: ''};
      const exception = new RemoteException(raw);
      expect(exception.rootCause).toBe(raw);
    });
  });

  describe('Local Exception', () => {
    it('get raw error', () => {
      const raw = {dummy: ''};
      const exception = new LocalException(raw);
      expect(exception.rootCause).toBe(raw);
    });
  });
});
