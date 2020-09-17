import {container} from 'tsyringe';
import {CombineAuthenticationRepository} from '@data';
import {AppDependencies} from './type';

export function registerRepositoryDependencies() {
  container.register(AppDependencies.AuthenticationRepository, {
    useClass: CombineAuthenticationRepository,
  });
}
