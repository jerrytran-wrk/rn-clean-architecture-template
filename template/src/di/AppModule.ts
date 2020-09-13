import {registerDatDependencies} from './DataModule';
import {container} from 'tsyringe';
import {StoreContainer, configureStore} from '@shared-state';
import {AppDependencies} from './type';

function registerDependencies() {
  registerDatDependencies();
}

function registerFlyValue() {
  container.register<StoreContainer>(AppDependencies.StoreContainer, {
    useValue: configureStore(),
  });
}

export {registerDependencies, registerFlyValue, container};
