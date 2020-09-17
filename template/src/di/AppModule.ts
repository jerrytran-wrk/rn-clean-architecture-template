import {container} from 'tsyringe';
import {StoreContainer, configureStore} from '@shared-state';

import {AppDependencies} from './type';
import {registerDataDependencies} from './DataModule';
import {registerRepositoryDependencies} from './RepositoryModule';
import {registerUseCase} from './UseCaseModule';

function registerDependencies() {
  registerDataDependencies();
  registerRepositoryDependencies();
  registerUseCase();
}

function registerFlyValue() {
  container.register<StoreContainer>(AppDependencies.StoreContainer, {
    useValue: configureStore(),
  });
}

export {registerDependencies, registerFlyValue, container};
