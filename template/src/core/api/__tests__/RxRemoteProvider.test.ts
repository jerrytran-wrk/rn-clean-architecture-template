import {AxiosRequestConfig} from 'axios';
import {
  BearerAuthorizationRxAxiosProvider,
  RxAxiosProviderException,
} from '@core';
import {MockBearerAuthorizationRxAxiosProvider} from '@mocks';

describe('RxRemoteProvider', () => {
  let provider: BearerAuthorizationRxAxiosProvider<any>;
  let requestConfigs: AxiosRequestConfig[] = [];
  let responsePromises: {[key in string]: Promise<any>} = {};

  beforeEach(() => {
    responsePromises = {};
    requestConfigs = [];
    provider = new BearerAuthorizationRxAxiosProvider({
      adapter: (config) => {
        requestConfigs.push(config);
        return responsePromises[config?.url ?? ''];
      },
    });
  });

  it('request successfully', (done) => {
    const config: AxiosRequestConfig = {url: 'Test', method: 'post'};
    const response = new Promise((res) => res({data: {test: 'test'}}));
    responsePromises = {[config.url ?? '']: response};
    // success case
    provider.request(config).subscribe({
      next: (val) => {
        expect(val.data.test).toBe('test');
        expect(requestConfigs.length).toBeGreaterThan(0);
      },
      complete: done,
    });
  });

  it('request failed', (done) => {
    const config: AxiosRequestConfig = {url: 'Test', method: 'post'};
    const response = new Promise((_, rej) => rej({data: {}}));
    responsePromises = {[config.url ?? '']: response};

    provider.post(config.url!, config.data).subscribe({
      error: (error) => {
        expect(error).toBeInstanceOf(RxAxiosProviderException);
        done();
      },
    });
  });

  it('post', () => {
    const mockProvider = new MockBearerAuthorizationRxAxiosProvider({});
    mockProvider.post('test', {});
    expect(mockProvider.logs).toEqual(['request']);
  });

  it('get', () => {
    const mockProvider = new MockBearerAuthorizationRxAxiosProvider({});
    mockProvider.get('test');
    expect(mockProvider.logs).toEqual(['request']);
  });
  it('delete', () => {
    const mockProvider = new MockBearerAuthorizationRxAxiosProvider({});
    mockProvider.delete('test');
    expect(mockProvider.logs).toEqual(['request']);
  });
  it('put', () => {
    const mockProvider = new MockBearerAuthorizationRxAxiosProvider({});
    mockProvider.put('test', {});
    expect(mockProvider.logs).toEqual(['request']);
  });
});
