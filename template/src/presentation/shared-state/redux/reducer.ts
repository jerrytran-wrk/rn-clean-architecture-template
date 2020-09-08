import {Reducer, combineReducers, Action} from 'redux';
import {ReducerManger, RootStoreState} from './types';

type ReducerKey = keyof RootStoreState;
type ReducerMap = {[key in keyof RootStoreState]: Reducer};

export function createReducerManager(reducerMap: ReducerMap): ReducerManger {
  // Create an object which maps keys to reducers
  const reducers: ReducerMap = {
    ...reducerMap,
  };

  // Create the initial combinedReducer
  let combinedReducer = combineReducers(reducers);
  // An array which is used to delete state keys when reducers are removed
  let keysToRemove: ReducerKey[] = [];

  return {
    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (
      state: RootStoreState | undefined,
      action: Action,
    ): RootStoreState => {
      // If any reducers have been removed, clean up their state first
      if (state && keysToRemove.length > 0) {
        state = {...state};
        for (let key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }
      // Delegate to the combined reducer
      return combinedReducer(state, action);
    },

    // Adds a new reducer with the specified key
    add: (key: ReducerKey, reducer: Reducer) => {
      if (reducers[key]) {
        return;
      }
      // Add the reducer to the reducer mapping
      reducers[key] = reducer;
      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },

    // Removes a reducer with the specified key
    remove: (key: ReducerKey) => {
      if (!reducers[key]) {
        return;
      }
      // Remove it from the reducer mapping
      delete reducers[key];
      // Add the key to the list of keys to clean up
      keysToRemove.push(key);
      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },
  };
}
