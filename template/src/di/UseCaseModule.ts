import {container} from 'tsyringe';
import {SignInUseCase} from '@domain';
import {AppDependencies} from './type';

export function registerUseCase() {
  container.register(AppDependencies.SignInUseCase, {
    useClass: SignInUseCase,
  });
}
