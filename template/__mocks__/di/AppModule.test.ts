import {registerDependencies, container} from '@di';
import {RxRemoteProvider} from '@core';
import {LocalAuthenticationDataSource} from '@data';

describe('Register app dependencies', () => {
  it('register', () => {
    registerDependencies();
    expect(container.resolve<RxRemoteProvider>('ApiProvider')).toBeDefined();
    expect(
      container.resolve<LocalAuthenticationDataSource>(
        'LocalAuthenticationDataSource',
      ),
    ).toBeDefined();
    expect(
      container.resolve<LocalAuthenticationDataSource>(
        'LocalAuthenticationDataSource',
      ),
    ).toBeDefined();
    expect(
      container.resolve<LocalAuthenticationDataSource>(
        'LocalAuthenticationDataSource',
      ),
    ).toBeDefined();
  });
});
