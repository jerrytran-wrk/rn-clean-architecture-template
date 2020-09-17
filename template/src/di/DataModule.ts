import {container} from 'tsyringe';
import {
  KeyChainAuthenticationDataSource,
  ApiAuthenticationDataSource,
} from '@data';
import {SignInUseCase} from '@domain';
import {BearerAuthorizationRxAxiosProvider, BuildConfig} from '@core';
import {AppDependencies} from './type';

export function registerDataDependencies() {
  container.register(AppDependencies.ApiProvider, {
    useValue: new BearerAuthorizationRxAxiosProvider({
      baseURL: BuildConfig.ApiUrl,
    }),
  });
  container.register(AppDependencies.LocalAuthenticationDataSource, {
    useClass: KeyChainAuthenticationDataSource,
  });

  container.register(AppDependencies.RemoteAuthenticationDataSource, {
    useClass: ApiAuthenticationDataSource,
  });

  container.register(AppDependencies.SignInUseCase, {
    useClass: SignInUseCase,
  });
}
