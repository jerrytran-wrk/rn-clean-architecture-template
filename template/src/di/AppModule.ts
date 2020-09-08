import {registerDatDependencies} from './DataModule';
import {container} from 'tsyringe';
import {StoreContainer, configureStore} from '@shared-state';

function registerDependencies() {
  registerDatDependencies();
}

function registerFlyValue() {
  container.register<StoreContainer>('StoreContainer', {
    useValue: configureStore(),
  });
}

export {registerDependencies, registerFlyValue, container};
