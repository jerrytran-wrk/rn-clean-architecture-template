import {
  registerDependencies,
  container,
  AppDependencies,
  registerFlyValue,
} from '@di';
import {RxRemoteProvider} from '@core';
import {
  LocalAuthenticationDataSource,
  RemoteAuthenticationDataSource,
} from '@data';
import {StoreContainer} from '@shared-state';
import {AuthenticationRepository, SignInUseCase} from '@domain';

describe('Register app dependencies', () => {
  it('register', () => {
    registerDependencies();
    registerFlyValue();
    expect(
      container.resolve<RxRemoteProvider>(AppDependencies.ApiProvider),
    ).toBeDefined();
    expect(
      container.resolve<LocalAuthenticationDataSource>(
        AppDependencies.LocalAuthenticationDataSource,
      ),
    ).toBeDefined();
    expect(
      container.resolve<RemoteAuthenticationDataSource>(
        AppDependencies.RemoteAuthenticationDataSource,
      ),
    ).toBeDefined();
    expect(
      container.resolve<StoreContainer>(AppDependencies.StoreContainer),
    ).toBeDefined();
    expect(
      container.resolve<AuthenticationRepository>(
        AppDependencies.AuthenticationRepository,
      ),
    ).toBeDefined();
    expect(
      container.resolve<SignInUseCase>(AppDependencies.SignInUseCase),
    ).toBeDefined();
  });
});
